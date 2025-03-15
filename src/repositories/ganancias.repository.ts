import { injectable } from 'inversify';
import { GananciasEntity } from "../entities/ganacias.entity";
import { db } from "../frameworks/db/db";
import { IGanancias } from "../ts/interfaces/ganancias.interface";

@injectable()
export class GananciasRepository implements IGanancias {

  async createProfit(startDate: Date, endDate: Date, totalProfit: number): Promise<void> {
    await db.profitSummary.create({
      data: {
        fecha_inicio: startDate,
        fecha_fin: endDate,
        ganancia_total: totalProfit,
        tipo_periodo: "Mensual"
      }
    });
  }

  async getProfit(): Promise<GananciasEntity[]> {
    return db.profitSummary.findMany();
  }
}
