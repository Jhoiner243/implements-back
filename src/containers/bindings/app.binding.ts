import { ContainerModule } from "inversify";
import { App } from "../../app/app";
import { HasPermission } from "../../frameworks/get-auth";
import { JwtAuth } from "../../frameworks/jwt";
import { Middlewares } from "../../frameworks/middlewares";

export const appBinding = new ContainerModule((bind) => {
  bind<App>(App).toSelf();
  bind(JwtAuth).toSelf();
  bind<HasPermission>(HasPermission).toSelf();
  bind(Middlewares).toSelf();
});
