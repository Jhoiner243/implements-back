import { Response } from "express";
import { inject } from "inversify";
import { Body, Delete, Get, JsonController, Param, Post, Put, Res } from "routing-controllers";
import { FacturasEntity } from "../entities/facturas.entity";
import { FacturaService } from "../services/factura.service";
import { AppError } from "../utils/errors/app-errors";

@JsonController()
export class FacturaController {
  constructor(@inject(FacturaService) private facturaService: FacturaService){}

  @Post("/factura")
  async dataFact(@Res() res: Response, @Body() data: FacturasEntity){
    const { message } = await this.facturaService.dataFact(data)

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
  @Put('/facturas/:id')
  async putFact(@Res() res: Response,@Body() Data: Partial<FacturasEntity>, @Param("id") id: string){
    try {
      const validData: FacturasEntity = {
        ...Data,
        detalles: Data.detalles || []
      } as FacturasEntity;

      const {message} = await this.facturaService.updateFact(id, validData);

      return res.json(message)
    } catch{
      return res.status(500).json({message: 'Error de servidor interno'})
    }
  }

  @Delete('/facturas/:id')
  async deleteFact(@Res() res: Response,@Param('id') id: string){
    try {
      const message = this.facturaService.deleteFact(id)
      return res.status(200).json(message)
    } catch{
      return res.status(500).json({message: 'Error de servidor interno'})
    }
  }
}