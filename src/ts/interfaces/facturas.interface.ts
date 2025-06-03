import { FacturaSeccion, FacturasEntity } from "../../entities/facturas.entity";
import { PanginationDto } from "../dtos/paginationDto";

export interface IFacturas {
  dataFact: (data: FacturasEntity) => Promise<void>;
  getFact: ({ limit, page }: PanginationDto) => Promise<FacturaSeccion[]>;
  deleteFact: (id: string) => Promise<void>;
  updateFact: (id: string, Data: Partial<FacturaSeccion>) => Promise<void>;
}
