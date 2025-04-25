import { injectable } from "inversify";
import { FacturasEntity } from "../entities/facturas.entity";
import { db } from "../frameworks/db/db";
import { Analytics } from "../ts/interfaces/analitics.interface";

@injectable()
export class AnaliticsRepository implements Analytics {
  async getAnalitIcsPedidos(): Promise<FacturasEntity[]> {
    const result = await db.factura.findMany({
      include: {detalles: true},
      cacheStrategy: {ttl: 60}
    });
    const facturas = result.map((factura) => {
      return {
        detalles: factura.detalles.map((detalle) => ({
          id: detalle.id,
          createdAt: detalle.createdAt,
          updatedAt: detalle.updatedAt,
          facturaId: detalle.facturaId,
          productoId: detalle.productoId,
          cantidad: detalle.cantidad,
          precio: detalle.precio,
          id_producto: detalle.productoId,
          precio_venta: detalle.precio,
        })),
        id_cliente: factura.clienteId,
        total: factura.total,
        createdAt: factura.createdAt,
      };
    });

    return facturas;
  }

  async getAnaliticsClientes() {
    const result = await db.clientes.findMany({
      cacheStrategy: {
        ttl: 60
      }
    });
    return result;
  }

  async getAnaliticsProductos() {
    const result = await db.productos.findMany({
      cacheStrategy: {
        ttl: 60
      }
    });
    return result;
  }
}