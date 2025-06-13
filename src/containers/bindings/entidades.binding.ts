import { ContainerModule, interfaces } from "inversify";
import { EntidadController } from "../../controllers/entidad.controller";
import { EntidadesRepository } from "../../repositories/entidades.repository";
import { EntidadService } from "../../services/entidad.service";

export const entidadesBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(EntidadService).toSelf();
  bind(EntidadController).toSelf();
  bind(EntidadesRepository).toSelf();
});
