import { inject, injectable } from "inversify";
import { TYPESCACHE } from "../containers/bindings/cache.binding";
import { IRedisClient } from "../frameworks/redis";
import { BaseRepository } from "../utils/tenant-id";

@injectable()
export class ClienteCacheService {
  private readonly CACHE_TTL = 3600;
  private readonly CACHE_PREFIX = "cliente";
  constructor(
    @inject(TYPESCACHE.RedisClient) private redisClient: IRedisClient,
    @inject(BaseRepository) private baseRepository: BaseRepository
  ) {}

  // Generadores de claves
  private getTenantPrefix(): string {
    const empresaId = this.baseRepository.getEmpresaId();
    return `${this.CACHE_PREFIX}:${empresaId}`;
  }

  // Métodos de cache de cliente
  getClienteCacheKey(id: string): string {
    const tenantPrefix = this.getTenantPrefix();
    return `${tenantPrefix}:${this.CACHE_PREFIX}:${id}`;
  }

  getVersionCacheKey(): string {
    const tenantPrefix = this.getTenantPrefix();
    return `version:${tenantPrefix}:${this.CACHE_PREFIX}`;
  }

  getClienteListCacheKey(limit: number, page: number, version: number): string {
    const tenantPrefix = this.getTenantPrefix();
    return `${tenantPrefix}:list:v${version}:${limit}:${page}`;
  }

  // Métodos de versionado de cache
  async getCurrentVersion(): Promise<number> {
    const key = this.getVersionCacheKey();
    const value = await this.redisClient.get(key);
    return value ? parseInt(value, 10) : 0;
  }

  async incrementVersion(): Promise<number> {
    const key = this.getVersionCacheKey();
    return await this.redisClient.incr(key);
  }

  // Métodos de cache de listado de clientes
  async getClienteListCache<T = unknown>(
    limit: number,
    page: number,
    version: number
  ): Promise<T | null> {
    const cacheKey = this.getClienteListCacheKey(limit, page, version);
    const cachedValue = await this.redisClient.get(cacheKey);
    return cachedValue ? (JSON.parse(cachedValue) as T) : null;
  }

  async setClienteListCache<T = unknown>(
    limit: number,
    page: number,
    version: number,
    data: T
  ): Promise<void> {
    const cacheKey = this.getClienteListCacheKey(limit, page, version);
    await this.redisClient.set(cacheKey, JSON.stringify(data), this.CACHE_TTL);
  }

  async invalidateClienteListCache(): Promise<void> {
    await this.incrementVersion();
  }
}
