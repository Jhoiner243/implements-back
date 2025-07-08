import { ContainerModule, interfaces } from "inversify";
import { FacturaCacheService } from "../../cache/factura.cache";
import { IRedisClient, RedisClient } from "../../frameworks/redis";

export const TYPESCACHE = {
  FacturaCacheService: Symbol.for("FacturaCacheService"),
  RedisClient: Symbol.for("RedisClient"),
};

export const cacheBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind<FacturaCacheService>(TYPESCACHE.FacturaCacheService)
    .to(FacturaCacheService)
    .inSingletonScope();
  bind<IRedisClient>(TYPESCACHE.RedisClient).to(RedisClient).inSingletonScope();
});
