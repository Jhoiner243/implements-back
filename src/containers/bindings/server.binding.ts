import { ContainerModule } from "inversify";
import { ServerSetup } from "../../frameworks/setups/server.setup";

export const serverBinding = new ContainerModule((bind) => {
  bind.bind(ServerSetup).toSelf()
})