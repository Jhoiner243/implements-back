import { TipoPeriodo } from "@prisma/client";
import { injectable } from "inversify";
import { GananciasEntity } from "../entities/ganacias.entity";
import { db } from "../frameworks/db/db";
import { prismaContext } from "../frameworks/db/middleware";
import { IGanancias } from "../ts/interfaces/ganancias.interface";

@injectable()
export class GananciasRepository implements IGanancias {
  async createProfit(
    startDate: Date,
    endDate: Date,
    totalProfit: number,
    tipo_periodo: TipoPeriodo
  ): Promise<void> {
    const { empresaId } = prismaContext.getStore() ?? { empresaId: null };
    if (!empresaId) {
      throw new Error("No se pudo determinar la empresa para la factura");
    }
    await db.profitSummary.create({
      data: {
        empresaId,
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
    await db.profitSummary.update({
      where: {
        id: id,
      },
      data: {
        ganancia_total: ganancia_total,
      },
    });
  }
  async getProfit(): Promise<GananciasEntity[]> {
    return db.profitSummary.findMany({
      orderBy: {
        id: "desc",
      },
      take: 7,
    });
  }

  async getProfitLast() {
    return db.profitSummary.findMany({
      select: {
        createdAt: true,
        ganancia_total: true,
      },
      orderBy: { id: "asc" },
      take: 1,
    });
  }
  async getProfitForCron() {
    const findFirstProfit = await db.profitSummary.findMany({
      where: {
        tipo_periodo: "Diario",
      },
      orderBy: {
        id: "asc",
      },
      take: 2,
    });
    if (findFirstProfit === null) return;
    return findFirstProfit;
  }
}
