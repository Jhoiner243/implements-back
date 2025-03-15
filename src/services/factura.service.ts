import { inject, injectable } from "inversify";
import { FacturasEntity } from "../entities/facturas.entity";
import { FacturaRepository } from "../repositories/factura.repository";
import { FacturasEntitySchema } from "../ts/validations/factura.validations";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class FacturaService {
  constructor(@inject(FacturaRepository) private facturaRepository: FacturaRepository){}

  async dataFact (data: FacturasEntity): Promise<{message: string}>{
    try {
      //Validamos los datos con zod
      const facturaValid = FacturasEntitySchema.parse(data)

      //Enviamos datos validados
      await this.facturaRepository.dataFact(facturaValid)

      return {message: "Factura creada exitosamente"}
    } catch (err) {
      if (err instanceof AppError){
        return AppError.error("Error de datos en appError", 500)
        } else {
          throw err;
        }
      }
    }

  async getFact(): Promise<FacturasEntity[]> {
    try{
      const facturas = await this.facturaRepository.getFact()

      return facturas
    }catch(err) {
      if(err){
        throw AppError.error("Error al enviar facturas", 500)
      }else {
        throw err
      }
    }
  }
  }
