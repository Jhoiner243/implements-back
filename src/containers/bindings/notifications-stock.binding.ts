import { ContainerModule, interfaces } from "inversify";
import { NotificationsController } from "../../controllers/notification-stock.controller";
import { NotificationsRepository } from "../../repositories/notifications.repository";
import { NotificationsService } from "../../services/notifications.service";

export const notificationsBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(NotificationsController).toSelf()
  bind(NotificationsService).toSelf()
  bind(NotificationsRepository).toSelf()
})