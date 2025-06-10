import { inject, injectable } from "inversify";
import { GananciasRepository } from "../repositories/ganancias.repository";
import { ProductoRepository } from "../repositories/producto.repository";

interface GananciaDiaria {
  precio_venta: number;
  cantidad: number;
  id_producto: string;
  fecha: Date;
}

@injectable()
export class DiaryProfit {
  constructor(
    @inject(ProductoRepository) private productoRepo: ProductoRepository,
    @inject(GananciasRepository) private gananciasRepo: GananciasRepository
  ) {}

  public async calculateProfitDiario({
    precio_venta,
    cantidad,
    id_producto,
    fecha,
  }: GananciaDiaria): Promise<void> {
    // 1. Obtener el producto
    const producto = await this.productoRepo.getById(id_producto);
    if (!producto) {
      console.warn(`Producto con id ${id_producto} no encontrado.`);
      return;
    }

    // 2. Calcular la ganancia del ítem
    const gananciaDiaria = (precio_venta - producto.precio_compra) * cantidad;

    // 3. Obtener todos los registros de ganancia (puede optimizarse filtrando en la consulta)
    const registros = await this.gananciasRepo.getProfit();

    // 4. Buscar si ya existe registro para la misma fecha (solo día/mes/año)
    const mismaFecha = (d1: Date, d2: Date) =>
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();

    const registroExistente = registros.find((r) =>
      mismaFecha(r.createdAt, fecha)
    );

    if (registroExistente) {
      // 5a. Si existe, acumulamos y actualizamos
      const totalActualizado =
        registroExistente.ganancia_total + gananciaDiaria;
      await this.gananciasRepo.updateProfitDiario({
        id: registroExistente.id,
        ganancia_total: totalActualizado,
      });
    } else {
      // 5b. Si no existe, creamos un nuevo registro
      await this.gananciasRepo.createProfit(
        fecha, // startDate
        fecha, // endDate (assuming the same date for daily profit)
        gananciaDiaria, // totalProfit
        "Diario" // tipo_periodo (assuming "DIARIO" for daily profit)
      );
    }
  }
}
