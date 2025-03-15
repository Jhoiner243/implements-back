import cron from 'node-cron';
import { GananciasEntity } from "../entities/ganacias.entity";
import { db } from "../frameworks/db/db";
import { IGanancias } from "../ts/interfaces/ganancias.interface";

export class GananciasRepository implements IGanancias{
  async createProfit(): Promise<void> {

    cron.schedule('0 0 28-31 * *', async () => {
      const startDatee = new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      const endDate = new Date()

      const facturas = await db.factura.findMany({
        include: {detalles: true}
      })

      let gananciaTotal = 0
      for(const factura of facturas){
        for(const detalles of factura.detalles){
          const productos = await db.productos.findUnique({
            where: {id: detalles.productoId}
          })
          if(!productos) return
          gananciaTotal +=(detalles.precio - productos.precio_compra ) * detalles.cantidad
        }
      }

      await db.profitSummary.create({
        data: {
          fecha_inicio: startDatee,
          fecha_fin: endDate,
          ganancia_total: gananciaTotal,
          tipo_periodo: "Mensual"
        }
      })

    });
  }

  async getProfit(): Promise<GananciasEntity[]> {
    return db.profitSummary.findMany();
  }
}