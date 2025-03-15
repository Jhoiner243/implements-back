import { Request, Response } from "express";
import { inject } from "inversify";
import { Body, Delete, Get, JsonController, Param, Post, Res } from "routing-controllers";
import { ClienteEntity } from "../entities/clientes.entity";
import { ClienteService } from "../services/clientes.service";
import { AppError } from "../utils/errors/app-errors";

@JsonController()
export class ClienteController {
  constructor(
    @inject(ClienteService) private clienteService: ClienteService
  ) {}

  @Post("/clientes")
  async addClient(@Res() res: Response, @Body() data: Omit<ClienteEntity, "id">){
    try {
      const { message } = await this.clienteService.addClient(data);
      return res.status(200).json({ message });
    } catch{
    return res.status(500).json({message: "Error de servidor interno"})
    }
  }

  @Get("/clientes/:id_cliente")
  async getClientByID(@Param("id_cliente") id_cliente: string, req: Request, @Res() res: Response, ) {  
    try {
      const cliente = await this.clienteService.getClientByID(id_cliente);
      return res.status(200).json({ data: cliente });
    } catch (err) {
      if(err instanceof AppError)
      return res.status(500).json({ message: err.message || "Error de servidor interno" });
    }
  }

  @Delete("/clientes/:id_cliente")
  async deleteClient(@Param("id_cliente") id_cliente: string, req: Request, @Res() res: Response) {
    try {
      console.log(id_cliente);
      const { message } = await this.clienteService.deleteClient(id_cliente);
      return res.status(200).json({ message });
    } catch (err) {
      if(err instanceof AppError)
      return res.status(500).json({ message: err.message || "Error de servidor interno" });
    }
  }

  @Get("/clientes")
  async getAllClient(@Res() res: Response) {
    try {
      const clientes = await this.clienteService.getAllClient();
      console.log(clientes);
      return res.status(200).json(clientes);
    } catch (err) {
      if(err instanceof AppError)
      return res.status(500).json({ message: err.message || "Error de servidor interno" });
    }
  }
}
