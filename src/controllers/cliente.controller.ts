import { Request, Response } from "express";
import { inject } from "inversify";
import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Put,
  Res,
} from "routing-controllers";
import { ZodError } from "zod";
import { clientCreate, ClienteEntity } from "../entities/clientes.entity";
import { ClienteService } from "../services/clientes.service";
import { AppError } from "../utils/errors/app-errors";
import { BaseController } from "./base.controller";

@JsonController()
export class ClienteController implements BaseController {
  constructor(@inject(ClienteService) private clienteService: ClienteService) {}

  @Post("/clientes")
  async addClient(
    @Res() res: Response,
    @Body() data: Omit<ClienteEntity, "id">
  ) {
    try {
      const { message } = await this.clienteService.addClient(data);
      return res.status(200).json({ message });
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      if (err instanceof AppError) {
        return res.status(400).json({ message: err.message });
      }
      console.error("Error en addClient:", err);
      return res.status(500).json({ message: "Error de servidor interno" });
    }
  }

  @Get("/cliente-by-id/:id_cliente")
  async getClientByID(
    @Param("id_cliente") id_cliente: string,
    req: Request,
    @Res() res: Response
  ) {
    try {
      const cliente = await this.clienteService.getClientByID(id_cliente);
      return cliente;
    } catch (err) {
      if (err instanceof AppError)
        return res
          .status(500)
          .json({ message: err.message || "Error de servidor interno" });
    }
  }

  @Put("/clientes/:id")
  async updateClientData(
    @Body() data: Partial<clientCreate>,
    @Param("id") id: string
  ) {
    const dataResponse = await this.clienteService.clienteUpdate(id, data);
    return dataResponse;
  }

  @Delete("/clientes/:id_cliente")
  async deleteClient(
    @Param("id_cliente") id_cliente: string,
    req: Request,
    @Res() res: Response
  ) {
    try {
      const { message } = await this.clienteService.deleteClient(id_cliente);
      return res.status(200).json({ message });
    } catch (err) {
      if (err instanceof AppError)
        return res
          .status(500)
          .json({ message: err.message || "Error de servidor interno" });
    }
  }

  @Get("/clientes")
  async getAllClient(@Res() res: Response) {
    try {
      const clientes = await this.clienteService.getAllClient();
      return res.status(200).json(clientes);
    } catch {
      return res.status(500).json("Error de servidor interno");
    }
  }
}
