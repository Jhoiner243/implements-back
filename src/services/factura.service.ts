import { inject, injectable } from "inversify";
import { FacturaSeccion, FacturasEntity } from "../entities/facturas.entity";
import { FacturaRepository } from "../repositories/factura.repository";
import { FacturasEntitySchema } from "../ts/validations/factura.validations";
import { AppError } from "../utils/errors/app-errors";
import { DiaryProfit } from "./diary-profit.service";

@injectable()
export class FacturaService {
  constructor(
    @inject(FacturaRepository) private facturaRepository: FacturaRepository,
    @inject(DiaryProfit) private diaryProfit: DiaryProfit
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

      const diary = facturaWithCreatedAt.detalles.map((detalle) => ({
        precio_venta: detalle.precio_venta,
        cantidad: detalle.cantidad,
        id_producto: detalle.id_producto,
        fecha: facturaWithCreatedAt.createdAt,
      }));

      await this.diaryProfit.calculateProfitDiario({
        cantidad: diary[0].cantidad,
        id_producto: diary[0].id_producto,
        precio_venta: diary[0].precio_venta,
        fecha: diary[0].fecha,
      });

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
