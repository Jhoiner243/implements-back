import { injectable } from "inversify";
import { FacturasEntity } from "../entities/facturas.entity";
import { db } from "../frameworks/db/db";
import { ResultPeriodoRate } from "../services/growt-rate.service";
import { Analytics } from "../ts/interfaces/analitics.interface";
import { BaseRepository } from "../utils/tenant-id";

@injectable()
export class AnaliticsRepository extends BaseRepository implements Analytics {
  async getAnalitIcsPedidos(): Promise<FacturasEntity[]> {
    const empresaId = this.getEmpresaId();
    const result = await db.factura.findMany({
      where: {
        empresa_id: empresaId,
      },
      include: { detalles: true },
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
    const empresaId = this.getEmpresaId();
    const result = await db.clientes.findMany({
      where: {
        empresa_id: empresaId,
      },
    });
    return result;
  }

  async getAnaliticsProductos() {
    return await db.productos.findMany({});
  }

  async getDataGrowtRate() {
    return await db.growtRate.findFirst({
      where: {
        tipoPeriodo: "Diario",
      },
      orderBy: {
        id: "desc",
      },
    });
  }
  async ratePeriodGrowt({ fechas, periodo, growthRate }: ResultPeriodoRate) {
    const empresaId = this.getEmpresaId();

    await db.growtRate.create({
      data: {
        empresa: {
          connect: {
            organizationId: empresaId,
          },
        },
        fechaActual: fechas.fechaActual,
        fechaAnterior: fechas.fechaAnterior,
        porcentaje: growthRate,
        tipoPeriodo: periodo,
      },
    });
  }
}
