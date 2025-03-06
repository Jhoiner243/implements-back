import { ContainerModule } from "inversify";
import { MiddlewaresSetup } from "../../frameworks/setups/middlewares.setup";
import { ServerSetup } from "../../frameworks/setups/server.setup";

export const setupBinding = new ContainerModule((bind) => {
  bind.bind(MiddlewaresSetup).toSelf()
  bind.bind(ServerSetup).toSelf()
})