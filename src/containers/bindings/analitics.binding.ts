import { ContainerModule, interfaces } from "inversify";
import { AnaliticsController } from "../../controllers/analitics.controller";
import { AnaliticsRepository } from "../../repositories/analitics.repository";
import { AnaliticsService } from "../../services/analitics.service";

export const analiticsBinding  = new ContainerModule((bind: interfaces.Bind) => {
  bind(AnaliticsController).toSelf()
  bind(AnaliticsService).toSelf()
  bind(AnaliticsRepository).toSelf()
})