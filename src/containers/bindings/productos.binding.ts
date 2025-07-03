import { ContainerModule, interfaces } from "inversify";
import { ProductoController } from "../../controllers/producto.controller";
import { AuthGuard } from "../../frameworks/guard";
import { AuthGuardVerification } from "../../frameworks/guard/guard-verification";
import { ProductoRepository } from "../../repositories/producto.repository";
import { ProductoService } from "../../services/producto.service";

export const productosBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(ProductoController).toSelf();
  bind(ProductoService).toSelf();
  bind(ProductoRepository).toSelf();
  bind(AuthGuard).toSelf();
  bind(AuthGuardVerification).toSelf();
});
