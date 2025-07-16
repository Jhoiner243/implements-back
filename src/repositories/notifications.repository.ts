import { injectable } from "inversify";
import { NotificationsEntity } from "../entities/notifications.entity";
import { db } from "../frameworks/db/db";
import { INotifications } from "../ts/interfaces/notifications.interface";
import { BaseRepository } from "../utils/tenant-id";

export interface GetNotificationsEntity {
  message: string;
  createdAt: Date;
  is_read: boolean;
}
@injectable()
export class NotificationsRepository
  extends BaseRepository
  implements INotifications
{
  async sendMulticasteNotifications(data: NotificationsEntity): Promise<void> {
    const empresaId = this.getEmpresaId();
    await db.notification.create({
      data: {
        empresa: {
          connect: {
            id: empresaId,
          },
        },
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
  async activeNotifications({
    token,
    id,
  }: {
    token: string;
    id: string;
  }): Promise<{ message: string }> {
    await db.user.update({
      where: {
        clerkId: id,
      },
      data: {
        token: token,
      },
    });

    return { message: "Token actualizado correctamente" };
  }

  async getForMulicastNotifications(): Promise<GetNotificationsEntity[]> {
    const empresaId = this.getEmpresaId();
    return await db.notification.findMany({
      where: {
        empresa_id: empresaId,
        is_read: false,
      },
      select: {
        message: true,
        createdAt: true,
        is_read: true,
      },
    });
  }

  async notificationDelete(id: string): Promise<{ message: string }> {
    await db.notification.delete({
      where: {
        id: id,
      },
    });

    return { message: "Notificación eliminada" };
  }

  async enableNotifications({ userId }: { userId: string }): Promise<boolean> {
    const notifications = await db.user.findMany({
      where: {
        id: userId,
      },
      select: {
        token: true,
      },
    });

    if (notifications === null) {
      return false;
    }
    return true;
  }
}
