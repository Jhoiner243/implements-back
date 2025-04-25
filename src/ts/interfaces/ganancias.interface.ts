import { GananciasEntity } from "../../entities/ganacias.entity";

export interface IGanancias {
  createProfit: (startDate: Date, endDate: Date, totalProfit: number, tipo_periodo: string) => Promise<void>
  getProfit: () => Promise<GananciasEntity[]>
}