import { injectable } from "inversify";
import { FacturasEntity } from "../entities/facturas.entity";
import { db } from "../frameworks/db/db";
import { IFacturas } from "../ts/interfaces/facturas.interface";
import { emailFacts } from "../utils/helpers/email-facts";

@injectable()
export class FacturaRepository implements IFacturas {

  async  dataFact(data: FacturasEntity): Promise<void> {

    const faturaCreate = await db.factura.create({
      data: {
        userId: data.id_usuario,
        detalles: {
          create: data.detalles.map(detalle => ({
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

  async getFact (): Promise<FacturasEntity[]>{
    const Facturas = await db.factura.findMany()

    return Facturas.map(factura => ({
      id: factura.id,
      id_usuario: factura.userId,
      id_cliente: factura.clienteId,
      total: factura.total,
      detalles: [],
      createdAt: factura.createdAt,
      updatedAt: factura.updatedAt,
    }));
  }
}
