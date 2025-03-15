import { GananciasEntity } from "../../entities/ganacias.entity";

export interface IGanancias {
  createProfit: (data: GananciasEntity) => Promise<void>
  getProfit: () => Promise<GananciasEntity[]>
}