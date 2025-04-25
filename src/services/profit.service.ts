import { format } from 'date-fns';
import { inject, injectable } from "inversify";
import { FacturasEntity } from '../entities/facturas.entity';
import { GananciasEntity, TipoPeriodo } from "../entities/ganacias.entity";
import { ProductoEntity } from '../entities/producto.entity';
import { db } from "../frameworks/db/db";
import { GananciasRepository } from "../repositories/ganancias.repository";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class GananciasServices {
  constructor(@inject(GananciasRepository) private gananciasRepository: GananciasRepository) {}

  private calculateProfitForInvoice(factura: FacturasEntity, productos: ProductoEntity[]): number {
    return factura.detalles.reduce((sum: number, detalle: typeof factura.detalles[0]) => {
      const producto = productos.find((p) => p.id === detalle.id_producto);
      if (!producto) {
        console.warn(`Producto no encontrado para el detalle: ${detalle}`);
        return sum;
      }
      const precioCompra = Number(producto.precio_compra);
      const precioVenta = Number(detalle.precio_venta);
      return sum + (precioVenta - precioCompra) * detalle.cantidad;
    }, 0);
  }

  async getAnaliticasGanancias() {
    // Obtener todas las facturas con detalles desde la base de datos
    const facturas = await db.factura.findMany({
        include: { detalles: true }
    });

    // Obtener todos los productos para calcular precios de compra
    const productos = await db.productos.findMany();
    const productMap = new Map(productos.map(p => [p.id, Number(p.precio_compra)]));

    // Mapa para agrupar ganancias por periodos
    const periodos = {
        diario: new Map<string, number>(),
        semanal: new Map<string, number>(),
        mensual: new Map<string, number>(),
        anual: new Map<string, number>(),
    };

    // Función para formatear claves de periodos
    const getPeriodKey = (date: Date, tipo: TipoPeriodo) => {
        switch (tipo) {
            case TipoPeriodo.Diario: return format(date, 'yyyy-MM-dd');
            case TipoPeriodo.Semanal: return format(date, "yyyy-'W'ww");
            case TipoPeriodo.Mensual: return format(date, 'yyyy-MM');
            case TipoPeriodo.Anual: return format(date, 'yyyy');
            default: return '';
        }
    };

    // Calcular ganancias para cada factura
    for (const factura of facturas) {
        const fecha = new Date(factura.createdAt);
        
        // Calcular ganancia de la factura
        let gananciaFactura = 0;
        for (const detalle of factura.detalles) {
            const precioCompra = productMap.get(detalle.productoId) || 0;
            gananciaFactura += (detalle.precio - precioCompra) * detalle.cantidad;
        }

        // Actualizar todos los periodos para esta factura
        Object.keys(TipoPeriodo).forEach((tipo) => {
            const key = getPeriodKey(fecha, tipo as TipoPeriodo);
            const map = periodos[tipo.toLowerCase() as keyof typeof periodos];
            map.set(key, (map.get(key) || 0) + gananciaFactura);
        });
    }

    // Formatear respuesta ordenada
    const formatData = (map: Map<string, number>) => 
        Array.from(map, ([periodo, ganancias]) => ({ periodo, ganancias }))
            .sort((a, b) => a.periodo.localeCompare(b.periodo));

    return {
        diario: formatData(periodos.diario),
        semanal: formatData(periodos.semanal),
        mensual: formatData(periodos.mensual),
        anual: formatData(periodos.anual),
    };
}

  async getProfit(): Promise<GananciasEntity[]> {
    const profit = await this.gananciasRepository.getProfit();
    if (!profit) throw new AppError('No hay ganancias registradas', 404);
    return profit;
  }
}