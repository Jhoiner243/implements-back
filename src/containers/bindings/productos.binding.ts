import { ContainerModule, interfaces } from "inversify";
import { ProductoController } from "../../controllers/producto.controller";
import { ProductoRepository } from "../../repositories/producto.repository";
import { ProductoService } from "../../services/producto.service";

export const productosBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(ProductoController).toSelf();
  bind(ProductoService).toSelf()
  bind(ProductoRepository).toSelf()
})