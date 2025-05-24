import { ContainerModule, interfaces } from "inversify";
import { AnaliticsController } from "../../controllers/analitics.controller";
import { AnaliticsRepository } from "../../repositories/analitics.repository";
import { AnaliticsService } from "../../services/analitics.service";
import { AutomatedGrowthIndex } from "../../services/growt-cron.service";
import { GrowthRateService } from "../../services/growt-rate.service";

export const analiticsBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(AnaliticsController).toSelf();
  bind(AnaliticsService).toSelf();
  bind(AnaliticsRepository).toSelf();
  bind(GrowthRateService).toSelf();
  bind(AutomatedGrowthIndex).toSelf();
});
