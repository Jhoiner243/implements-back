import { ContainerModule, interfaces } from "inversify";
import { GananciasController } from "../../controllers/ganancias.controller";
import { GananciasRepository } from "../../repositories/ganancias.repository";
import { GanaciasService } from "../../services/ganancias.service";

export const gananciasBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(GananciasController).toSelf()
  bind(GanaciasService).toSelf()
  bind(GananciasRepository).toSelf()

})