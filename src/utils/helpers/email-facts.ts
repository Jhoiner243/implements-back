import { db } from "../../frameworks/db/db";
import { transporter } from "../transporter";

export async function emailFacts (facturaId: string) {
  const factura = await db.factura.findUnique({
    where: {id: facturaId},
    include: {detalles: true, cliente: true}
  })

  if(factura === null ) return

  const productos = await db.productos.findUnique({
    where: {id: factura?.detalles[0].productoId},})
  try {
      //Enviamos al email del cliente
      console.log(factura.cliente.email)
      await transporter.sendMail({
        to: factura?.cliente.email,
        subject: `Factura #${factura?.id}`,
        html: `<p>productos: ${productos?.nombre}</p>
        <b>Cantidad de productos: ${factura?.detalles[0].cantidad}</b>
        <h2>Factura de ${factura?.total}</h2>`
      })

      //Actualizamos factura con fechas
      await db.factura.update({
        where: { id: facturaId },
        data: { createdAt: new Date() }
      });

      //Actualizamos el log del email a success si fue enviado
      await db.emailLog.create({
        data: {
          facturaId: factura.id,
          status: "Success"
        }
      })

  } catch {
    await db.emailLog.create({
      data: {
        facturaId: factura.id,
        status: "Failed"
      }
    })

    throw new Error("Error de envio factura")
  }
}