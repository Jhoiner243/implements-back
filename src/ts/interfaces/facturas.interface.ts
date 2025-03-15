import { FacturasEntity } from "../../entities/facturas.entity";

export interface IFacturas {
  dataFact: (data: FacturasEntity)=> Promise<void>;
  getFact: ()=> Promise<FacturasEntity[]>;
}