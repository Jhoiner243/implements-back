import { TipoPeriodo } from "@prisma/client";
import { injectable } from "inversify";
import { GananciasEntity } from "../entities/ganacias.entity";
import { db } from "../frameworks/db/db";
import { IGanancias } from "../ts/interfaces/ganancias.interface";

@injectable()
export class GananciasRepository implements IGanancias {
  async createProfit(
    startDate: Date,
    endDate: Date,
    totalProfit: number,
    tipo_periodo: TipoPeriodo
  ): Promise<void> {
    await db.profitSummary.create({
      data: {
        fecha_inicio: startDate,
        fecha_fin: endDate,
        ganancia_total: totalProfit,
        tipo_periodo: tipo_periodo,
      },
    });
  }
  async updateProfitDiario({
    ganancia_total,
    id,
  }: {
    ganancia_total: number;
    id: string;
  }): Promise<void> {
    const profitDiario = await db.profitSummary.update({
      where: {
        id: id,
      },
      data: {
        ganancia_total: ganancia_total,
      },
    });
    console.log(profitDiario);
  }
  async getProfit(): Promise<GananciasEntity[]> {
    return db.profitSummary.findMany();
  }
}
