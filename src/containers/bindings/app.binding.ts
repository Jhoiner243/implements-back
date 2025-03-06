import { ContainerModule } from "inversify";
import { App } from "../../app/app";

export const appBinding = new ContainerModule((bind) => {
  bind.bind(App).toSelf()
})