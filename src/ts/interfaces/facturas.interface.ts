import { FacturaSeccion, FacturasEntity } from "../../entities/facturas.entity";

export interface IFacturas {
  dataFact: (data: FacturasEntity)=> Promise<void>;
  getFact: ()=> Promise<FacturaSeccion[]>;
  deleteFact: (id: string)=> Promise<void>;
  updateFact: (id: string, Data: Partial<FacturasEntity>)=> Promise<void>;
}