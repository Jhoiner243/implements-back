import cron from "node-cron";
import { AutomatedGrowthIndex } from "../../services/growt-cron.service";

export async function automatizedCron(
  automatizedCronGrowt: AutomatedGrowthIndex
) {
  const growt = cron.schedule(
    "1 * * * *",
    async () => {
      await automatizedCronGrowt.cronAutomatedCall();
      growt.stop();
    },
    {
      timezone: "America/Bogota",
    }
  );
  //Enviar notificacion de ganancias al final del día
  const messaging = cron.schedule(
    "1 * * * *",
    async () => {
      await automatizedCronGrowt.messagingProfitTotal();
      console.log("Se usa");
      messaging.stop();
    },
    {
      timezone: "America/Bogota",
    }
  );
}
