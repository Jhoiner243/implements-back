import { ContainerModule, interfaces } from "inversify";
import { GananciasController } from "../../controllers/ganancias.controller";
import { GananciasRepository } from "../../repositories/ganancias.repository";
import { DiaryProfit } from "../../services/diary-profit.service";
import { GananciasService } from "../../services/ganancias.service";
import { GananciasServices } from "../../services/profit.service";

export const gananciasBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(GananciasController).toSelf();
  bind(GananciasService).toSelf();
  bind(GananciasServices).toSelf();
  bind(GananciasRepository).toSelf();
  bind(DiaryProfit).toSelf();
});
