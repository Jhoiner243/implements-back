import { TipoPeriodo } from "@prisma/client";
import { injectable } from "inversify";
import { GananciasEntity } from "../entities/ganacias.entity";
import { db } from "../frameworks/db/db";
import { IGanancias } from "../ts/interfaces/ganancias.interface";
import { BaseRepository } from "../utils/tenant-id";

@injectable()
export class GananciasRepository extends BaseRepository implements IGanancias {
  async createProfit(
    startDate: Date,
    endDate: Date,
    totalProfit: number,
    tipo_periodo: TipoPeriodo
  ): Promise<void> {
    const empresaId = this.getEmpresaId();
    await db.profitSummary.create({
      data: {
        empresa_id: empresaId,
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
    const empresaId = this.getEmpresaId();
    await db.profitSummary.update({
      where: {
        id: id,
        empresa_id: empresaId,
      },
      data: {
        ganancia_total: ganancia_total,
      },
    });
  }
  async getProfit(): Promise<GananciasEntity[]> {
    const empresaId = this.getEmpresaId();
    return db.profitSummary.findMany({
      where: { empresa_id: empresaId },
      orderBy: {
        createdAt: "desc",
      },
      take: 7,
    });
  }

  async getProfitLast() {
    const empresaId = this.getEmpresaId();
    return db.profitSummary.findMany({
      where: { empresa_id: empresaId },
      select: {
        createdAt: true,
        ganancia_total: true,
      },
      orderBy: { id: "asc" },
      take: 1,
    });
  }
  async getProfitForCron({ empresaId }: { empresaId: string }) {
    const findFirstProfit = await db.profitSummary.findMany({
      where: {
        tipo_periodo: "Diario",
        empresa_id: empresaId,
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
