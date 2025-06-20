import { Response } from "express";
import { inject } from "inversify";
import { Get, JsonController, Res } from "routing-controllers";
import { GananciasServices } from "../services/profit.service";
import { AppError } from "../utils/errors/app-errors";
import { BaseController } from "./base.controller";
import {GananciasEntity} from "../entities/ganacias.entity";

@JsonController()
export class GananciasController implements BaseController {
  constructor(
    @inject(GananciasServices) private gananciasService: GananciasServices
  ) {}

  @Get("/profit")
  async getProfit(@Res() res: Response) {
    try {
      const profit:GananciasEntity[] = await this.gananciasService.getProfit();
      return res.status(200).json(profit);
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
