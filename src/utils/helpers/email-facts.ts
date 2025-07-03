/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "../../frameworks/db/db";
import { prismaContext } from "../../frameworks/db/middleware";
import { transporter } from "../transporter";

/**
 * Genera el contenido HTML del correo de la factura.
 */
function generateFacturaHTML(
  productos: any[],
  detalles: any[],
  total: number
): string {
  const listaProductos = productos
    .map((producto) => {
      const cantidad =
        detalles.find((d) => d.productoId === producto.id)?.cantidad || 0;
      return `<li>${producto.nombre} - Cantidad: ${cantidad}</li>`;
    })
    .join("");

  return `
    <h2>Factura</h2>
    <p><b>Productos:</b></p>
    <ul>${listaProductos}</ul>
    <p><b>Total:</b> $${total}</p>
  `;
}

export async function emailFacts(facturaId: string) {
  const factura = await db.factura.findUnique({
    where: { id: facturaId },
    include: { detalles: true, cliente: true },
  });

  if (!factura || !factura.cliente?.email) {
    console.warn("Factura o correo del cliente no encontrado.");
    return;
  }

  const productoIds = factura.detalles.map((detalle) => detalle.productoId);
  const productos = await db.productos.findMany({
    where: { id: { in: productoIds } },
  });

  const htmlContent = generateFacturaHTML(
    productos,
    factura.detalles,
    factura.total
  );

  try {
    await transporter.sendMail({
      to: factura.cliente.email,
      subject: `Factura #${factura.id.slice(0, 6).concat("- INV")}`,
      html: htmlContent,
    });

    await db.factura.update({
      where: { id: facturaId },
      data: { createdAt: new Date() },
    });

    const { empresaId } = prismaContext.getStore() ?? { empresaId: null };
    if (!empresaId) {
      throw new Error("No se pudo determinar la empresa para la factura");
    }

    await db.emailLog.create({
      data: {
        empresa_id: empresaId,
        facturaId: factura.id,
        status: "Success",
      },
    });
  } catch {
    const { empresaId } = prismaContext.getStore() ?? { empresaId: null };
    if (!empresaId) {
      throw new Error("No se pudo determinar la empresa para la factura");
    }
    await db.emailLog.create({
      data: {
        empresa_id: empresaId,
        facturaId: factura.id,
        status: "Failed",
      },
    });
  }
}
