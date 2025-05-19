import { TipoPeriodo } from "@prisma/client";
import { inject, injectable } from "inversify";
import { GananciasEntity } from "../entities/ganacias.entity";
import { db } from "../frameworks/db/db";
import { GananciasRepository } from "../repositories/ganancias.repository";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class GananciasService {
  constructor(
    @inject(GananciasRepository)
    private gananciasRepository: GananciasRepository
  ) {}

  async calculateProfit({
    tipo_periodo,
  }: {
    tipo_periodo: TipoPeriodo;
  }): Promise<void> {
    try {
      const startDate = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        1
      );
      const endDate = new Date();

      // Obtener todas las facturas con detalles
      const facturas = await db.factura.findMany({
        include: { detalles: true },
      });

      // Obtener todos los productos de una sola vez para evitar múltiples consultas
      const productos = await db.productos.findMany();
      if (productos[0].precio_compra === null) return;
      const productMap = new Map(
        productos.map((producto) => [producto.id, producto.precio_compra])
      );

      // Calcular ganancia total
      let gananciaTotal = 0;
      for (const factura of facturas) {
        for (const detalle of factura.detalles) {
          if (detalle.productoId === null) return;
          const precioCompra = Number(productMap.get(detalle.productoId) ?? 0);
          if (precioCompra !== undefined) {
            const precioCompraSeguro = precioCompra ?? 0;
            gananciaTotal +=
              (detalle.precio - precioCompraSeguro) * detalle.cantidad;
          }
        }
      }

      // Guardar ganancias en la base de datos
      await this.gananciasRepository.createProfit(
        startDate,
        endDate,
        gananciaTotal,
        tipo_periodo
      );
    } catch (error) {
      console.error("Error al calcular ganancias:", error);
    }
  }

  async getProfit(): Promise<GananciasEntity[]> {
    const profit = await this.gananciasRepository.getProfit();
    if (!profit) throw new AppError("No hay ganancias", 404);
    return profit;
  }
}
