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
      const empresas = await db.empresa.findMany({
        select: {
          id: true,
        },
      });
      for (const empresaId of empresas) {
        const startDate = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          1
        );
        const endDate = new Date();
        // Obtener facturas del periodo con sus detalles
        const facturas = await db.factura.findMany({
          where: {
            empresa_id: empresaId.id,
          },
          include: { detalles: true },
        });

        if (!facturas.length) return;

        // Obtener todos los productos disponibles
        const productos = await db.productos.findMany({
          where: { avaliable: true, empresa_id: empresaId.id },
        });

        // Crear un mapa de productoId => precio_compra
        const productMap = new Map(
          productos.map((producto) => [
            producto.id,
            Number(producto.precio_compra),
          ])
        );

        let gananciaTotal = 0;

        for (const factura of facturas) {
          for (const detalle of factura.detalles) {
            const precioCompra = productMap.get(detalle.productoId ?? "");
            if (precioCompra) {
              const ganancia =
                (detalle.precio - precioCompra) * detalle.cantidad;
              gananciaTotal += ganancia;
            }
          }
        }

        // Guardar ganancia en la base de datos
        await this.gananciasRepository.createProfit(
          startDate,
          endDate,
          gananciaTotal,
          tipo_periodo
        );
      }
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
