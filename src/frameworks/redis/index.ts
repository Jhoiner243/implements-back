import { injectable } from "inversify";
import Redis from "ioredis";
import { REDIS_URL } from "../../config/configs";

export interface IRedisClient {
  get(key: string): Promise<string | null>;
  set(key: string, value: string, ex?: number, px?: number): Promise<void>;
  del(key: string): Promise<void>;
  incr(key: string): Promise<number>;

  // Métodos para limpiar el cache
  delPattern(pattern: string): Promise<void>;

  // Métodos para obtener información del cache
  keys(pattern: string): Promise<string[]>;

  // Método para verificar si una clave existe
  exists(key: string): Promise<boolean>;
}

@injectable()
export class RedisClient implements IRedisClient {
  private client: Redis;
  constructor() {
    this.client = new Redis(REDIS_URL as string);
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async incr(key: string): Promise<number> {
    return await this.client.incr(key);
  }

  async set(
    key: string,
    value: string,
    ex?: number,
    px?: number
  ): Promise<void> {
    if (ex !== undefined) {
      await this.client.set(key, value, "EX", ex);
    } else if (px !== undefined) {
      await this.client.set(key, value, "PX", px);
    } else {
      await this.client.set(key, value);
    }
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  async delPattern(pattern: string): Promise<void> {
    const keys = await this.client.keys(pattern);
    if (keys.length > 0) {
      await this.client.del(...keys);
    }
  }

  async keys(pattern: string): Promise<string[]> {
    return await this.client.keys(pattern);
  }

  async exists(key: string): Promise<boolean> {
    const result = await this.client.exists(key);
    return result === 1;
  }
}
