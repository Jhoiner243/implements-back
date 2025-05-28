import { injectable } from "inversify";
import {
  FacturaSeccion,
  FacturasEntity,
  StatusFactura,
} from "../entities/facturas.entity";
import { db } from "../frameworks/db/db";
import { IFacturas } from "../ts/interfaces/facturas.interface";
import { emailFacts } from "../utils/helpers/email-facts";

@injectable()
export class FacturaRepository implements IFacturas {
  async dataFact(data: FacturasEntity): Promise<void> {
    const faturaCreate = await db.factura.create({
      data: {
        detalles: {
          create: (data.detalles ?? []).map((detalle) => ({
            productoId: detalle.id_producto,
            cantidad: detalle.cantidad,
            precio: detalle.precio_venta,
          })),
        },
        clienteId: data.id_cliente,
        total: data.total,
      },
    });

    await db.productos.update({
      where: { id: data.detalles[0]?.id_producto },
      data: {
        stock: { decrement: data.detalles[0]?.cantidad ?? 0 },
      },
    });

    await emailFacts(faturaCreate.id);
  }

  async getFact(): Promise<FacturaSeccion[]> {
    const Facturas = await db.factura.findMany({
      include: { cliente: true },
    });

    return Facturas.map((factura) => ({
      id: factura.id,
      id_cliente: factura.cliente?.name ?? "Unknown",
      total: factura.total,
      detalles: [],
      status: factura.status as StatusFactura,
      createdAt: factura.createdAt,
      updatedAt: factura.updatedAt,
    }));
  }

  async deleteFact(id: string): Promise<void> {
    await db.detalleFactura.delete({
      where: {
        id: id,
      },
    });
  }
  async getFacturaById(id: string) {
    return await db.factura.findUnique({
      where: {
        id: id,
      },
      include: {
        cliente: {
          select: {
            name: true,
            email: true,
            phone: true,
            address: true,
          },
        },

        detalles: {
          include: {
            producto: {
              select: {
                id: true,
                nombre: true,
              },
            },
          },
        },
      },
      cacheStrategy: {
        ttl: 60,
      },
    });
  }
  async updateFact(id: string, data: Partial<FacturaSeccion>): Promise<void> {
    await db.factura.update({
      where: {
        id: id,
      },
      data: {
        detalles: {
          create: (data.detalles ?? []).map((detalle) => ({
            productoId: detalle.id_producto,
            cantidad: detalle.cantidad,
            precio: detalle.precio_venta,
          })),
        },
        clienteId: data.id_cliente,
        status: data.status,
        total: data.total,
      },
    });
  }
}
