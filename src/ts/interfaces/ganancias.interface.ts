import { TipoPeriodo } from "@prisma/client";
import { GananciasEntity } from "../../entities/ganacias.entity";

export interface IGanancias {
  createProfit: (
    startDate: Date,
    endDate: Date,
    totalProfit: number,
    tipo_periodo: TipoPeriodo
  ) => Promise<void>;
  getProfit: () => Promise<GananciasEntity[]>;
}
