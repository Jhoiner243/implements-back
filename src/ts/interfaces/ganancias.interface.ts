import { GananciasEntity } from "../../entities/ganacias.entity";

export interface IGanancias {
  createProfit: (startDate: Date, endDate: Date, totalProfit: number) => Promise<void>
  getProfit: () => Promise<GananciasEntity[]>
}