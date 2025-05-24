import cron from "node-cron";
import { AutomatedGrowthIndex } from "../../services/growt-cron.service";

export async function automatizedCron(
  automatizedCronGrowt: AutomatedGrowthIndex
) {
  const growt = cron.schedule(
    "* * * * * *",
    async () => {
      await automatizedCronGrowt.cronAutomatedCall();
      growt.stop();
    },
    {
      timezone: "America/Bogota",
    }
  );
}
