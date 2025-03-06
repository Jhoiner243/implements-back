import { ContainerModule } from "inversify";
import { App } from "../../app/app";
import { Middlewares } from "../../frameworks/middlewares";

export const appBinding = new ContainerModule((bind) => {
  bind.bind(App).toSelf()
  bind.bind(Middlewares).toSelf()
})