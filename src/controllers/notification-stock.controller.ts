/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { inject } from "inversify";
import {
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Req,
  Res,
} from "routing-controllers";
import { GetNotificationsEntity } from "../repositories/notifications.repository";
import { NotificationsService } from "../services/notifications.service";
import { AppError } from "../utils/errors/app-errors";
import { BaseController } from "./base.controller";

@JsonController()
export class NotificationsController implements BaseController {
  constructor(
    @inject(NotificationsService)
    private notificationsService: NotificationsService
  ) {}

  @Get("/notifications")
  async getMulticastNotifications(@Res() res: Response) {
    try {
      const response: GetNotificationsEntity[] =
        await this.notificationsService.getForMulicastNotifications();
      return res.status(200).json(response);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }

  @Post("/notifications")
  async ActiveSendNotifications(@Req() req: Request, @Res() res: Response) {
    try {
      const tokenJwt: any = req.cookies.__session;
      console.log(tokenJwt);
      if (tokenJwt === undefined) {
        return res.status(401).json({ error: "Access token is missing" });
      }
      const { token } = req.body;
      const { message } = await this.notificationsService.activeNotifications(
        token,
        tokenJwt
      );
      return res.status(200).json({ message });
    } catch (error: any) {
      if (error instanceof AppError) {
        return res.status(error.status).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  }

  @Delete("/notifications-delete/:id")
  async notificationDelete(@Res() res: Response, @Param("id") id: string) {
    try {
      const { message } = await this.notificationsService.notificationDelete(
        id
      );
      return { message };
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.status).json({ error: error.message });
      }
      return res.status(500).json({ error: "Error de servidor interno" });
    }
  }
}
