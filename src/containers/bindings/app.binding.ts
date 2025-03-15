import { ContainerModule } from "inversify";
import { App } from "../../app/app";
import { Middlewares } from "../../frameworks/middlewares";

export const appBinding = new ContainerModule((bind) => {
  bind<App>(App).toSelf()
  bind(Middlewares).toSelf()
})