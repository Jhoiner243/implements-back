import { injectable } from "inversify";
import { FacturaSeccion, FacturasEntity, StatusFactura } from "../entities/facturas.entity";
import { db } from "../frameworks/db/db";
import { IFacturas } from "../ts/interfaces/facturas.interface";
import { emailFacts } from "../utils/helpers/email-facts";

@injectable()
export class FacturaRepository implements IFacturas {

  async  dataFact(data: FacturasEntity): Promise<void> {

    const faturaCreate = await db.factura.create({
      data: {
        detalles: {
          create: (data.detalles ?? []).map(detalle => ({
            productoId: detalle.id_producto,
            cantidad: detalle.cantidad,
            precio: detalle.precio_venta,
          })),
        },
        clienteId: data.id_cliente,
        total: data.total,
      }
    });

    return emailFacts(faturaCreate.id)
  }

  async getFact (): Promise<FacturaSeccion[]>{
    const Facturas = await db.factura.findMany({
      include: {cliente: true}
    })

    return Facturas.map(factura => ({
      id: factura.id,
      id_cliente: factura.cliente.name,
      total: factura.total,
      detalles: [],
      status: factura.status as StatusFactura,
      createdAt: factura.createdAt,
      updatedAt: factura.updatedAt,
    }));
  }

  async deleteFact (id: string): Promise<void> {
    await db.detalle_factura.delete({
      where: {
        id: id
      }
    })
  }

  async updateFact (id: string, data: Partial<FacturasEntity>): Promise<void> {
    await db.factura.update({
      where: {
        id: id,
      },
      data: {
        detalles: {
          create: (data.detalles ?? []).map(detalle => ({
            productoId: detalle.id_producto,
            cantidad: detalle.cantidad,
            precio: detalle.precio_venta,
          })),
        },
        clienteId: data.id_cliente,
        total: data.total,
      }
    })
  }

}
