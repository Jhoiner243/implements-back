import { ContainerModule } from "inversify";
import { MiddlewaresSetup } from "../../frameworks/setups/middlewares.setup";
import { RoutesSetup } from "../../frameworks/setups/routes.setup";
import { ServerSetup } from "../../frameworks/setups/server.setup";

export const TYPES = {
  Routes: Symbol.for("Routes"),
  App: Symbol.for("App")
};

export const setupBinding = new ContainerModule((bind) => {
  bind.bind(MiddlewaresSetup).toSelf()
  bind.bind<RoutesSetup>(RoutesSetup).toSelf()
  bind.bind(ServerSetup).toSelf()
})