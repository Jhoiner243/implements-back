import { ContainerModule } from "inversify";
import { App } from "../../app/app";
import { AuthGuard } from "../../frameworks/guard";
import { JwtAuth } from "../../frameworks/jwt";
import { Middlewares } from "../../frameworks/middlewares";

export const appBinding = new ContainerModule((bind) => {
  bind<App>(App).toSelf()
  bind(JwtAuth).toSelf()
  bind(AuthGuard).toSelf()
  bind(Middlewares).toSelf()
})