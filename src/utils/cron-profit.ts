import cron from "node-cron";
import { GananciasService } from "../services/ganancias.service";

export function startProfitCronJob(gananciasService: GananciasService) {
  cron.schedule("0 0 0 * * 0", async () => {
    await gananciasService.calculateProfit({ tipo_periodo: "Semanal" });
  });
  cron.schedule("0 0 0 28 * *", async () => {
    await gananciasService.calculateProfit({ tipo_periodo: "Mensual" });
  });
}
