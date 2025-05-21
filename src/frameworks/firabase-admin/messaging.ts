import cron from "node-cron";
import { NotificationsService } from "../../services/notifications.service";

export const startNotifications = (notificaciones: NotificationsService) => {
  cron.schedule("0 */10 * * *", async () => {
    await notificaciones.sendMulticastNotifications();
  });
};
