import cron from 'node-cron';
import { TipoPeriodo } from '../entities/ganacias.entity';
import { GananciasService } from '../services/ganancias.service';

export function startProfitCronJob(gananciasService: GananciasService) {
  cron.schedule('0 0 0 * * 0', async () => {
    console.log("⏳ Ejecutando cálculo de ganancias semanal...");
    await gananciasService.calculateProfit({tipo_periodo: TipoPeriodo.Semanal});
    console.log("✅ Ganancias calculadas y guardadas.");
  });
  cron.schedule('0 0 0 28 * *', async () => {
    console.log("⏳ Ejecutando cálculo de ganancias mensual...");
    await gananciasService.calculateProfit({tipo_periodo: TipoPeriodo.Mensual});
    console.log("✅ Ganancias calculadas y guardadas.");
  });
  cron.schedule('0 59 23 * * *', async () => {
    console.log("⏳ Ejecutando cálculo de ganancias diaria...");
    await gananciasService.calculateProfit({tipo_periodo: TipoPeriodo.Diario});
    console.log("✅ Ganancias calculadas y guardadas.");
  });
}

