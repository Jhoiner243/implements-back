import cron from "node-cron";
import { NotificationsService } from "../../services/notifications.service";

export const startNotifications = (notificaciones: NotificationsService) => {
  cron.schedule("0 */10 * * *", async () => {
    console.log("🔍 Iniciando verificación de stock...");
    await notificaciones.sendMulticastNotifications();
  });
};
