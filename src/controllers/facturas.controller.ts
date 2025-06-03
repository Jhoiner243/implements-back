import { StatusFactura } from "@prisma/client";
import { Response } from "express";
import { inject } from "inversify";
import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
  QueryParam,
  Res,
} from "routing-controllers";
import { ZodError } from "zod";
import { FacturaSeccion, FacturasEntity } from "../entities/facturas.entity";
import { FacturaService } from "../services/factura.service";
import { AppError } from "../utils/errors/app-errors";
import { BaseController } from "./base.controller";

@JsonController()
export class FacturaController implements BaseController {
  constructor(@inject(FacturaService) private facturaService: FacturaService) {}

  @Post("/factura")
  async dataFact(@Body() data: FacturasEntity) {
    try {
      const { message } = await this.facturaService.dataFact(data);

      return message;
    } catch (err) {
      if (err instanceof AppError) {
        return err.message;
      }
      if (err instanceof ZodError) {
        return err.message;
      }
    }
  }
  @Get("/facturas")
  async getFact(
    @QueryParam("page") page: string,
    @QueryParam("limit") limit: string,
    @Res() res: Response
  ) {
    try {
      const facturas = await this.facturaService.getFact({
        limit: limit ? +limit : undefined,
        page: page ? +page : undefined,
      });
      return facturas;
    } catch (err) {
      if (err instanceof AppError) {
        return res.status(err.status).json({ message: err.message });
      }
      return res.status(500).json("Error de de sevidor interno");
    }
  }

  @Get("/factura/with-status")
  async getStatus(
    @QueryParam("page") page: string,
    @QueryParam("limit") limit: string,
    @QueryParam("status") status: string,
    @Res() res: Response
  ) {
    try {
      const facturas = await this.facturaService.getFacturaWithStatus({
        status: status as StatusFactura,
        limit: limit ? +limit : undefined,
        page: page ? +page : undefined,
      });
      return facturas;
    } catch (err) {
      if (err instanceof AppError) {
        return res.status(err.status).json({ message: err.message });
      }
      return res.status(500).json("Error de de sevidor interno");
    }
  }

  @Put("/facturas/:id")
  async putFact(
    @Body() data: Partial<FacturaSeccion>,
    @Param("id") id: string
  ) {
    const { message } = await this.facturaService.updateFact(id, data);

    return message;
  }

  @Get("/factura/:id")
  async getFacturaById(@Param("id") id: string) {
    const response = await this.facturaService.getFacturaById(id);
    return response;
  }
  @Delete("/facturas/:id")
  async deleteFact(@Res() res: Response, @Param("id") id: string) {
    try {
      const message = this.facturaService.deleteFact(id);
      return res.status(200).json(message);
    } catch {
      return res.status(500).json({ message: "Error de servidor interno" });
    }
  }
}
