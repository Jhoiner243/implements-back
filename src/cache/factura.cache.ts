import { StatusFactura } from "@prisma/client";
import { inject, injectable } from "inversify";
import { TYPES } from "../containers/bindings/setup.binding";
import { IRedisClient } from "../frameworks/redis";
import { BaseRepository } from "../utils/tenant-id";

export type FacturaCacheStatus = StatusFactura | "ALL";

function normalizeStatus(status?: StatusFactura): FacturaCacheStatus {
  return status ?? "ALL";
}

@injectable()
export class FacturaCacheService {
  private readonly CACHE_TTL = 3600;
  private readonly CACHE_PREFIX = "factura";

  constructor(
    @inject(TYPES.RedisClient) private redisClient: IRedisClient,
    @inject(BaseRepository) private baseRepository: BaseRepository
  ) {}

  private getTenantPrefix(): string {
    const empresaId = this.baseRepository.getEmpresaId();
    return `${this.CACHE_PREFIX}:${empresaId}`;
  }

  private getTenantId(): string {
    return this.baseRepository.getEmpresaId();
  }

  // Generadores de claves
  getFacturaCacheKey(id: string): string {
    const tenantPrefix = this.getTenantPrefix();
    return `${tenantPrefix}:${id}`;
  }

  getFacturasListCacheKey(
    status?: StatusFactura,
    limit?: number,
    page?: number,
    version?: number
  ): string {
    const tenantPrefix = this.getTenantPrefix();
    const normStatus = normalizeStatus(status);
    return `${tenantPrefix}:list:${normStatus}:v${version ?? 0}:${
      limit ?? 10
    }:${page ?? 1}`;
  }

  getTotalCountCacheKey(status?: StatusFactura): string {
    const tenantPrefix = this.getTenantPrefix();
    const normStatus = normalizeStatus(status);
    return `${tenantPrefix}:count:${normStatus}`;
  }

  getVersionCacheKey(status?: StatusFactura): string {
    const tenantPrefix = this.getTenantPrefix();
    const normStatus = normalizeStatus(status);
    console.log("normStatus", normStatus);
    return `version:${tenantPrefix}:${normStatus}`;
  }

  // Métodos de cache de factura individual
  async getFacturaByIdCache<T = unknown>(id: string): Promise<T | null> {
    const cacheKey = this.getFacturaCacheKey(id);
    const cachedValue = await this.redisClient.get(cacheKey);
    return cachedValue ? (JSON.parse(cachedValue) as T) : null;
  }

  async setFacturaByIdCache<T = unknown>(id: string, data: T): Promise<void> {
    const cacheKey = this.getFacturaCacheKey(id);
    await this.redisClient.set(cacheKey, JSON.stringify(data), this.CACHE_TTL);
  }

  async invalidateFacturaCache(id: string): Promise<void> {
    await this.redisClient.del(this.getFacturaCacheKey(id));
  }

  // Métodos de cache de listados
  async getFacturasListCache<T = unknown>(
    status?: StatusFactura,
    limit?: number,
    page?: number,
    version?: number
  ): Promise<T | null> {
    const cacheKey = this.getFacturasListCacheKey(status, limit, page, version);
    console.log("cacheKey", cacheKey);
    const cachedValue = await this.redisClient.get(cacheKey);
    console.log("cachedValue", cachedValue);
    return cachedValue ? (JSON.parse(cachedValue) as T) : null;
  }

  async setFacturasListCache<T = unknown>(
    status?: StatusFactura,
    limit?: number,
    page?: number,
    version?: number,
    data?: T
  ): Promise<void> {
    const cacheKey = this.getFacturasListCacheKey(status, limit, page, version);
    await this.redisClient.set(cacheKey, JSON.stringify(data), this.CACHE_TTL);
  }

  async invalidateListCache(status?: StatusFactura): Promise<void> {
    const key = this.getVersionCacheKey(status);
    console.log("Incrementando versión de cache para:", key);
    await this.redisClient.incr(key);
  }

  async invalidateAllStatusCaches(): Promise<void> {
    const statuses = [...Object.values(StatusFactura), "ALL"];
    for (const status of statuses) {
      await this.invalidateListCache(status as StatusFactura);
    }
  }

  // Métodos de cache de conteo
  async getTotalCountCache(status?: StatusFactura): Promise<number> {
    const key = this.getTotalCountCacheKey(status);
    const value = await this.redisClient.get(key);
    return value ? parseInt(value, 10) : 0;
  }

  async setTotalCountCache(
    status: StatusFactura | undefined,
    count: number
  ): Promise<void> {
    const key = this.getTotalCountCacheKey(status);
    await this.redisClient.set(key, count.toString(), this.CACHE_TTL);
  }

  async invalidateCountCache(status?: StatusFactura): Promise<void> {
    await this.redisClient.del(this.getTotalCountCacheKey(status));
  }

  // Métodos de versionado
  async getCurrentVersion(status?: StatusFactura): Promise<number> {
    const key = this.getVersionCacheKey(status);
    console.log("key", key);
    const value = await this.redisClient.get(key);
    return value ? parseInt(value, 10) : 0;
  }

  // Métodos de limpieza y stats
  async clearAllFacturaCache(): Promise<void> {
    const tenantPrefix = this.getTenantPrefix();
    await this.redisClient.delPattern(`${tenantPrefix}:*`);
    await this.redisClient.delPattern(`version:${tenantPrefix}:*`);
  }

  async clearFacturaCacheById(id: string): Promise<void> {
    await this.invalidateFacturaCache(id);
  }

  async clearCacheByStatus(
    status: StatusFactura
  ): Promise<{ message: string }> {
    const tenantPrefix = this.getTenantPrefix();
    const normStatus = normalizeStatus(status);

    // Limpiar listados del status
    await this.redisClient.delPattern(`${tenantPrefix}:list:${normStatus}:*`);
    // Limpiar conteo del status
    await this.redisClient.del(this.getTotalCountCacheKey(status));
    // Incrementar versión del status
    await this.invalidateListCache(status);

    return {
      message: `Cache de facturas con status ${normStatus} limpiado exitosamente`,
    };
  }

  async getCacheStats(): Promise<{
    totalKeys: number;
    facturaKeys: number;
    versionKeys: number;
    countKeys: number;
    tenantId: string;
  }> {
    const tenantPrefix = this.getTenantPrefix();
    const allKeys = await this.redisClient.keys(`${tenantPrefix}:*`);
    const versionKeys = await this.redisClient.keys(
      `version:${tenantPrefix}:*`
    );
    const countKeys = await this.redisClient.keys(`${tenantPrefix}:count:*`);
    const facturaKeys = await this.redisClient.keys(`${tenantPrefix}:[^:]*`);
    return {
      totalKeys: allKeys.length + versionKeys.length,
      facturaKeys: facturaKeys.length,
      versionKeys: versionKeys.length,
      countKeys: countKeys.length,
      tenantId: this.getTenantId(),
    };
  }

  // Métodos de validación multitenant
  async validateTenantCache(): Promise<{ isValid: boolean; tenantId: string }> {
    try {
      const tenantId = this.getTenantId();
      const tenantPrefix = this.getTenantPrefix();
      const testKey = `${tenantPrefix}:test`;

      // Verificar que podemos escribir y leer en el cache del tenant
      await this.redisClient.set(testKey, "test", 60);
      const testValue = await this.redisClient.get(testKey);
      await this.redisClient.del(testKey);

      return {
        isValid: testValue === "test",
        tenantId,
      };
    } catch {
      return {
        isValid: false,
        tenantId: "unknown",
      };
    }
  }

  // Método para obtener todas las claves del tenant actual
  async getAllTenantKeys(): Promise<string[]> {
    const tenantPrefix = this.getTenantPrefix();
    const allKeys = await this.redisClient.keys(`${tenantPrefix}:*`);
    const versionKeys = await this.redisClient.keys(
      `version:${tenantPrefix}:*`
    );
    return [...allKeys, ...versionKeys];
  }
}
