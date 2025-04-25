import { NotificationsEntity } from "../../entities/notifications.entity";
import { GetNotificationsEntity } from "../../repositories/notifications.repository";

export interface INotifications {
  sendMulticasteNotifications: (data: NotificationsEntity) => Promise <void>
  getForMulicastNotifications: () => Promise <GetNotificationsEntity[]>
  notificationDelete: (id: string) => Promise<{message: string}>  
}