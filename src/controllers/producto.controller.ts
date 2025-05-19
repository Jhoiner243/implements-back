import { Response } from "express";
import { inject } from "inversify";
import {
  Body,
  Delete,
  Get,
  JsonController,
  Param,
  Post,
  Res,
} from "routing-controllers";
import {
  CategoryEntity,
  type ProductoEntity,
} from "../entities/producto.entity";
import { ProductoService } from "../services/producto.service";
import { AppError } from "../utils/errors/app-errors";
import { BaseController } from "./base.controller";

@JsonController()
export class ProductoController implements BaseController {
  constructor(
    @inject(ProductoService) private productoService: ProductoService
  ) {}

  @Post("/productos")
  async addProducto(@Body() data: Omit<ProductoEntity, "id">) {
    const { message } = await this.productoService.addProducto(data);
    return message;
  }

  @Post("/category")
  async createCategory(
    @Res() res: Response,
    @Body() data: Omit<CategoryEntity, "id">
  ) {
    try {
      const { message } = await this.productoService.createCategory(data);
      return res.status(200).json({ message });
    } catch {
      return res.status(500).json({ message: "Error de servidor interno" });
    }
  }

  @Get("/productos")
  async getProductos(@Res() res: Response) {
    try {
      const productos = await this.productoService.getAllProducto();
      return res.status(200).json(productos);
    } catch (err) {
      if (err instanceof AppError)
        return res
          .status(500)
          .json({ message: err.message || "Error de servidor interno" });
    }
  }

  @Delete("/productos/:id")
  async deleteProducto(@Param("id") id: string) {
    const { message } = await this.productoService.deleteProducto(id);
    return message;
  }

  @Get("/category")
  async getCategory(@Res() res: Response) {
    try {
      const category = await this.productoService.getAllCategory();
      return res.status(200).json(category);
    } catch (err) {
      if (err instanceof AppError)
        return res
          .status(500)
          .json({ message: err.message || "Error de servidor interno" });
    }
  }
}
