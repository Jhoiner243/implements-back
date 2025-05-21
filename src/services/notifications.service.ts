/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, injectable } from "inversify";
import jwt from "jsonwebtoken";
import { REFRESH_TOKEN_SECRET } from "../config/auth.config";
import { NotificationsEntity } from "../entities/notifications.entity";
import { db } from "../frameworks/db/db";
import messaging from "../frameworks/firabase-admin/admin.sdk";
import {
  GetNotificationsEntity,
  NotificationsRepository,
} from "../repositories/notifications.repository";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class NotificationsService {
  constructor(
    @inject(NotificationsRepository)
    private notificationsRepository: NotificationsRepository
  ) {}
  async activeNotifications(
    token: string,
    token_jwt: string
  ): Promise<{ message: string }> {
    const idDecoded = jwt.verify(token_jwt, REFRESH_TOKEN_SECRET as string) as {
      user_id: string;
    };

    const { message } = await this.notificationsRepository.activeNotifications(
      token,
      idDecoded.user_id
    );

    if (!message) {
      throw new AppError(
        "No se pudo activar la notificación para el usuario",
        500
      );
    }

    return { message: message };
  }

  async sendMulticastNotifications(): Promise<void> {
    try {
      // 1. Obtener productos con bajo stock
      const lowStockProducts = await db.productos.findMany({
        where: {
          stock: { lt: 5 },
        },
        select: {
          nombre: true,
        },
      });

      const usuarioTokens = await db.user.findMany({
        select: {
          id: true,
          token: true,
        },
      });

      if (usuarioTokens[0].token === null) return;

      // 2. Validar que hayan productos y tokens
      if (lowStockProducts.length === 0) {
        return;
      }

      if (usuarioTokens.length === 0) {
        return;
      }

      const notificationData: NotificationsEntity = {
        user: usuarioTokens[0].id,
        message: {
          message: `Productos bajos de stock: ${lowStockProducts
            .map((p) => p.nombre)
            .join(", ")}`,
          tokens: [usuarioTokens[0].token],
          sent: false,
        },
      };

      // 4. Enviar notificaciones
      const response = await messaging.sendEachForMulticast({
        notification: {
          title: "Alerta de inventario",
          body: notificationData.message.message,
        },
        tokens: notificationData.message.tokens,
      });

      // 5. Actualizar estado y guardar en repositorio
      notificationData.message.sent = response.successCount > 0;

      if (response.failureCount > 0) {
        notificationData.error = `Errores: ${
          response.responses.filter((r) => !r.success).length
        }`;
      }

      // 6. Guardar en base de datos usando el repositorio
      await this.notificationsRepository.sendMulticasteNotifications(
        notificationData
      );
    } catch (error: any) {
      throw new Error(`Error al enviar notificaciones: ${error.message}`);
    }
  }

  async getForMulicastNotifications(): Promise<GetNotificationsEntity[]> {
    try {
      const notifications =
        await this.notificationsRepository.getForMulicastNotifications();
      return notifications;
    } catch (error: any) {
      throw new Error(`Error al obtener notificaciones: ${error.message}`);
    }
  }

  async notificationDelete(id: string): Promise<{ message: string }> {
    const { message } = await this.notificationsRepository.notificationDelete(
      id
    );

    if (!message) {
      throw new AppError("No se pudo eliminar la notificación", 500);
    }

    return { message: message };
  }
}
