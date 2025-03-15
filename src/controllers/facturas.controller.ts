import { Request, Response } from "express";
import { inject } from "inversify";
import { Controller, Get, Post, Req, Res } from "routing-controllers";
import { FacturaService } from "../services/factura.service";
import { AppError } from "../utils/errors/app-errors";

@Controller()
export class FacturaController {
  constructor(@inject(FacturaService) private facturaService: FacturaService){}

  @Post("/factura")
  async dataFact(@Req() req: Request, @Res() res: Response){
    const { id_cliente, id_usuario, detalles, total} = req.body

    const { message } = await this.facturaService.dataFact({
      id_cliente,
      id_usuario,
      detalles,
      total
    })

    res.json(message)
  }
  @Get("/facturas")
  async getFact(@Res() res: Response){
    try {
      const facturas = await this.facturaService.getFact()

      return res.status(200).json(facturas)
    } catch (err){
      if(err instanceof AppError){
				return res.status(err.status).json({ message: err.message });
      }
      return res.status(500).json("Error de de sevidor interno")
    }
  }
}