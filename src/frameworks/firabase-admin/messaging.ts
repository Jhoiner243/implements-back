import cron from "node-cron";
import { NotificationsService } from "../../services/notifications.service";

export const startNotifications = (notificaciones: NotificationsService) => {
  cron.schedule("* * * * *", async () => {
    await notificaciones.sendMulticastNotifications();
  });
};
