import { Response } from "express";
import { inject } from "inversify";
import { Get, JsonController, Res } from "routing-controllers";
import { GananciasServices } from "../services/profit.service";
import { AppError } from "../utils/errors/app-errors";

@JsonController()
export class GananciasController {
  constructor(@inject(GananciasServices)private gananciasService: GananciasServices) {}

  @Get('/profit')
  async getProfit(@Res() res: Response) {
    try {
      const profit = await this.gananciasService.getProfit();
      return res.status(200).json(profit);
    } catch (error) {
      if(error instanceof AppError) { 
        return res.status(500).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    
  }
}