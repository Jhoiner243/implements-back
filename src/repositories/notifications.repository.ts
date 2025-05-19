import { injectable } from "inversify";
import { NotificationsEntity } from "../entities/notifications.entity";
import { db } from "../frameworks/db/db";
import { INotifications } from "../ts/interfaces/notifications.interface";

export interface GetNotificationsEntity {
  message: string;
  is_read: boolean;
}
@injectable()
export class NotificationsRepository implements INotifications {
  async sendMulticasteNotifications(data: NotificationsEntity): Promise<void> {
    await db.notification.create({
      data: {
        message: data.message.message,
        is_read: data.is_read,
        user: {
          connect: {
            id: data.user,
          },
        },
      },
    });
  }
  async activeNotifications(
    token: string,
    id: string
  ): Promise<{ message: string }> {
    await db.user.update({
      where: {
        id: id,
      },
      data: {
        token: token,
      },
    });

    return { message: "Token actualizado correctamente" };
  }

  async getForMulicastNotifications(): Promise<GetNotificationsEntity[]> {
    return await db.notification.findMany();
  }

  async notificationDelete(id: string): Promise<{ message: string }> {
    await db.notification.delete({
      where: {
        id: id,
      },
    });

    return { message: "Notificación eliminada" };
  }
}
