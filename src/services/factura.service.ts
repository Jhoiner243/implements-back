import { inject, injectable } from "inversify";
import { FacturaSeccion, FacturasEntity } from "../entities/facturas.entity";
import { FacturaRepository } from "../repositories/factura.repository";
import { FacturasEntitySchema } from "../ts/validations/factura.validations";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class FacturaService {
  constructor(
    @inject(FacturaRepository) private facturaRepository: FacturaRepository
  ) {}

  async dataFact(data: FacturasEntity): Promise<{ message: string }> {
    try {
      //Validamos los datos con zod
      const facturaValid = FacturasEntitySchema.parse(data);

      // Agregamos la propiedad createdAt
      const facturaWithCreatedAt = {
        ...facturaValid,
        createdAt: new Date(),
        detalles: facturaValid.detalles.map((detalle) => ({
          ...detalle,
          createdAt: new Date(),
        })),
      };

      // Enviamos datos validados
      await this.facturaRepository.dataFact(facturaWithCreatedAt);

      return { message: "Factura creada exitosamente" };
    } catch (err) {
      if (err instanceof AppError) {
        return AppError.error("Error de datos en appError", 500);
      } else {
        throw err;
      }
    }
  }

  async getFact(): Promise<FacturaSeccion[]> {
    try {
      const facturas = await this.facturaRepository.getFact();

      return facturas;
    } catch (err) {
      if (err) {
        throw AppError.error("Error al enviar facturas", 500);
      } else {
        throw err;
      }
    }
  }

  async deleteFact(id: string): Promise<{ message: string }> {
    try {
      await this.facturaRepository.deleteFact(id);
      return { message: "Factura eliminada exitosamente" };
    } catch (err) {
      if (err instanceof AppError) {
        return AppError.error("Error al eliminar la factura", 500);
      } else {
        throw err;
      }
    }
  }

  async updateFact(
    id: string,
    data: Partial<FacturaSeccion>
  ): Promise<{ message: string }> {
    try {
      await this.facturaRepository.updateFact(id, data);
      return { message: "Factura actualizada exitosamente" };
    } catch (err) {
      if (err instanceof AppError) {
        return AppError.error("Error de datos en appError", 500);
      } else {
        throw err;
      }
    }
  }
}
