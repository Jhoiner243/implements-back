import { inject, injectable } from "inversify";
import { GananciasEntity } from "../entities/ganacias.entity";
import { db } from "../frameworks/db/db";
import { GananciasRepository } from "../repositories/ganancias.repository";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class GanaciasService {
  constructor(@inject(GananciasRepository) private gananciasRepository: GananciasRepository){}

  async calculateProfit(): Promise<void> {
    try {
      const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
      const endDate = new Date();

      // Obtener todas las facturas con detalles
      const facturas = await db.factura.findMany({
        include: { detalles: true }
      });

      // Obtener todos los productos de una sola vez para evitar múltiples consultas
      const productos = await db.productos.findMany();
      const productMap = new Map(productos.map(producto => [producto.id, producto.precio_compra]));

      // Calcular ganancia total
      let gananciaTotal = 0;
      for (const factura of facturas) {
        for (const detalle of factura.detalles) {
          const precioCompra = productMap.get(detalle.productoId);
          if (precioCompra !== undefined) {
            gananciaTotal += (detalle.precio - precioCompra) * detalle.cantidad;
          }
        }
      }

      // Guardar ganancias en la base de datos
      await this.gananciasRepository.createProfit(startDate, endDate, gananciaTotal);

    } catch (error) {
      console.error("Error al calcular ganancias:", error);
    }
  }

  async getProfit(): Promise<GananciasEntity[]> {
    
    const profit = await this.gananciasRepository.getProfit()
    if(!profit) throw new AppError('No hay ganancias', 404)
    return profit
  }
}