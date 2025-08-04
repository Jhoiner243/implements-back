import { inject, injectable } from "inversify";
import { FacturaCacheService } from "../cache/factura.cache";
import { TYPESCACHE } from "../containers/bindings/cache.binding";
import { FacturaSeccion, FacturasEntity } from "../entities/facturas.entity";
import { SubmitDianFactus } from "../frameworks/factus-dian";
import { FacturaRepository } from "../repositories/factura.repository";
import { PanginationDto } from "../ts/dtos/paginationDto";
import { FacturasEntitySchema } from "../ts/validations/factura.validations";
import { AppError } from "../utils/errors/app-errors";
import { DiaryProfit } from "./diary-profit.service";

@injectable()
export class FacturaService {
  constructor(
    @inject(FacturaRepository) private facturaRepository: FacturaRepository,
    @inject(DiaryProfit) private diaryProfit: DiaryProfit,
    @inject(TYPESCACHE.FacturaCacheService)
    private facturaCache: FacturaCacheService,
    @inject(SubmitDianFactus) private submitDian: SubmitDianFactus
  ) {}

  async clearAllFacturaCache(): Promise<void> {
    try {
      await this.facturaCache.clearAllFacturaCache();
    } catch (err) {
      console.error("Error al limpiar cache:", err);
      throw AppError.error("Error al limpiar el cache", 500);
    }
  }

  async clearFacturaCacheById(id: string): Promise<void> {
    try {
      await this.facturaCache.clearFacturaCacheById(id);
    } catch (err) {
      console.error("Error al limpiar cache de factura:", err);
      throw AppError.error("Error al limpiar el cache de la factura", 500);
    }
  }

  async dataFact(data: FacturasEntity): Promise<{ message: string }> {
    try {
      const facturaValid = FacturasEntitySchema.parse(data);
      const facturaWithCreatedAt = {
        ...facturaValid,
        createdAt: new Date(),
        detalles: facturaValid.detalles.map((detalle) => ({
          ...detalle,
          porcentage_descuento: detalle.porcentage_descuento,
          createdAt: new Date(),
        })),
      };

      const facturaCreada = await this.facturaRepository.dataFact(
        facturaWithCreatedAt
      );

      //Envío de factura a Dian
      await this.submitDian.dataAdapterForSubmitToFactus({
        company: facturaCreada.empresa,
        facturaAdapter: {
          factura: facturaCreada,
          items: facturaCreada.detalles.map((detalle) => ({
            id: detalle.id,
            facturaId: detalle.facturaId,
            nombre: detalle.producto.nombre,
            porcentage_descuento: detalle.porcentage_descuento,
            cantidad: detalle.cantidad,
            precio_compra: detalle.precio,
            precio: detalle.precio,
            productoId: detalle.producto.id,
            id_producto: detalle.id,
            createdAt: detalle.createdAt,
            updatedAt: detalle.updatedAt,
          })),
          customer: facturaCreada.cliente,
        },
      });

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

      // Invalida todos los caches de listado y conteo (versiones y conteos)
      await this.clearAllFacturaCache();

      return { message: "Factura creada exitosamente" };
    } catch (err) {
      console.error("Error en dataFact:", err);
      throw AppError.error("Error de datos en appError", 500);
    }
  }

  async getFact({ limit = 10, page = 1, status }: PanginationDto): Promise<{
    facturas: FacturaSeccion[];
    lastPages: number;
    totalFact: number;
  }> {
    try {
      // Si status es undefined, se cachea como 'ALL'
      const version = parseInt(
        this.facturaCache.getVersionCacheKey(status) ?? "0",
        10
      );
      const cached = await this.facturaCache.getFacturasListCache<{
        facturas: FacturaSeccion[];
        lastPages: number;
        totalFact: number;
      }>(status, limit, page, version);
      if (cached) {
        return cached;
      }

      let totalFact = await this.facturaCache.getTotalCountCache(status);
      if (totalFact === 0) {
        // Si status es undefined, traer todas las facturas
        totalFact = await this.facturaRepository.CountFact();
        await this.facturaCache.setTotalCountCache(status, totalFact);
      }
      const lastPage = Math.ceil(totalFact / limit);
      // Si status es undefined, traer todas las facturas
      const facturas = status
        ? await this.facturaRepository.getFact({ status, limit, page })
        : await this.facturaRepository.getFact({ limit, page });
      const result = { facturas, totalFact, lastPages: lastPage };

      // Guarda en cache la lista de facturas
      await this.facturaCache.setFacturasListCache(
        status,
        limit,
        page,
        version,
        result
      );
      return result;
    } catch (err) {
      console.error("Error en getFact:", err);
      throw AppError.error("Error al enviar facturas", 500);
    }
  }

  async getFacturaWithStatus({
    limit = 10,
    page = 1,
    status,
  }: PanginationDto): Promise<{
    facturas: FacturaSeccion[];
    lastPages: number;
    totalFact: number;
  }> {
    try {
      const version = parseInt(
        this.facturaCache.getVersionCacheKey(status) ?? "0",
        10
      );
      const cached = await this.facturaCache.getFacturasListCache<{
        facturas: FacturaSeccion[];
        lastPages: number;
        totalFact: number;
      }>(status, limit, page, version);
      if (cached) {
        return cached;
      }
      // Si status es undefined, traer todas las facturas
      const facturas = status
        ? await this.facturaRepository.getStatus({ status, limit, page })
        : await this.facturaRepository.getFact({ limit, page });
      let totalFact = await this.facturaCache.getTotalCountCache(status);
      if (totalFact === 0) {
        totalFact = status
          ? await this.facturaRepository.CountFact()
          : await this.facturaRepository.CountFact();
        await this.facturaCache.setTotalCountCache(status, totalFact);
      }
      const lastPage = Math.ceil(totalFact / limit);
      const result = { facturas, totalFact, lastPages: lastPage };
      await this.facturaCache.setFacturasListCache(
        status,
        limit,
        page,
        version,
        result
      );
      return result;
    } catch (err) {
      console.error("Error en getFacturaWithStatus:", err);
      throw AppError.error("Error al enviar facturas", 500);
    }
  }

  async getFacturaById(id: string) {
    try {
      const cached =
        await this.facturaCache.getFacturaByIdCache<FacturaSeccion>(id);
      if (cached) {
        return cached;
      }
      const data = await this.facturaRepository.getFacturaById(id);
      if (data) {
        await this.facturaCache.setFacturaByIdCache(id, data);
      }
      return data;
    } catch (err) {
      console.error("Error en getFacturaById:", err);
      throw AppError.error("Error al obtener la factura", 500);
    }
  }

  async deleteFact(id: string): Promise<{ message: string }> {
    try {
      const factura = await this.facturaRepository.getFacturaById(id);
      if (factura) {
        await this.facturaCache.invalidateFacturaCache(id);
        // Invalida cache del status anterior (si existe)
        if (factura.status) {
          await this.facturaCache.invalidateListCache(factura.status);
          await this.facturaCache.invalidateCountCache(factura.status);
        }
        // Invalida también el cache global (ALL)
        await this.facturaCache.invalidateListCache();
        await this.facturaCache.invalidateCountCache();
      }
      await this.facturaRepository.deleteFact(id);
      return { message: "Factura eliminada exitosamente" };
    } catch (err) {
      console.error("Error en deleteFact:", err);
      throw AppError.error("Error al eliminar la factura", 500);
    }
  }

  async updateFact(
    id: string,
    data: Partial<FacturaSeccion>
  ): Promise<{ message: string }> {
    try {
      await this.facturaRepository.getFacturaById(id);
      const updatedFactura = await this.facturaRepository.updateFact(id, data);
      if (updatedFactura) {
        await this.clearAllFacturaCache();
        await this.facturaCache.clearFacturaCacheById(updatedFactura.id);
      }
      return { message: "Factura actualizada exitosamente" };
    } catch (err) {
      console.error("Error en updateFact:", err);
      throw AppError.error("Error de datos en appError", 500);
    }
  }

  async getCacheStats(): Promise<{
    totalKeys: number;
    facturaKeys: number;
    versionKeys: number;
    countKeys: number;
  }> {
    try {
      return await this.facturaCache.getCacheStats();
    } catch (err) {
      console.error("Error al obtener estadísticas del cache:", err);
      throw AppError.error("Error al obtener estadísticas del cache", 500);
    }
  }
}
