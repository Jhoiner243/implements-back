import { ContainerModule, interfaces } from "inversify";
import { MiddlewaresSetup } from "../../frameworks/setups/middlewares.setup";
import { RoutesSetup } from "../../frameworks/setups/routes.setup";
import { ServerSetup } from "../../frameworks/setups/server.setup";
import { TerminusSetup } from "../../frameworks/setups/terminus.setup";

export const TYPES = {
  Routes: Symbol.for("Routes"),
  App: Symbol.for("App"),
  RedisClient: Symbol.for("RedisClient"),
};

export const setupBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(MiddlewaresSetup).toSelf();
  bind(RoutesSetup).toSelf();
  bind(ServerSetup).toSelf();
  bind(TerminusSetup).toSelf();
});
