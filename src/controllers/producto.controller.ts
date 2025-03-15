import { Response } from "express";
import { inject } from "inversify";
import { Body, Delete, Get, JsonController, Param, Post, Res } from "routing-controllers";
import { CategoryEntity, type ProductoEntity } from "../entities/producto.entity";
import { ProductoService } from "../services/producto.service";
import { AppError } from "../utils/errors/app-errors";

@JsonController()
export class ProductoController {
  constructor(@inject(ProductoService) private productoService: ProductoService){}

  @Post("/productos")
  async addProducto(@Res() res: Response, @Body() data: Omit<ProductoEntity, "id">){
    try {
      const { message } = await this.productoService.addProducto(data);
      return res.status(200).json({ message });
    } catch{
    return res.status(500).json({message: "Error de servidor interno"})
    }
  }

  @Post("/category")
  async createCategory(@Res() res: Response, @Body() data: Omit<CategoryEntity, "id">){
    try {
      console.log(data)
      const { message } = await this.productoService.createCategory(data);
      return res.status(200).json({ message });
    } catch{
    return res.status(500).json({message: "Error de servidor interno"})
    }
  }

  @Get("/productos")
  async getProductos(@Res() res: Response){
    try {
      const productos = await this.productoService.getAllProducto();
      return res.status(200).json(productos);
    } catch (err) {
      if(err instanceof AppError)
      return res.status(500).json({ message: err.message || "Error de servidor interno" });
    }
  }

  @Delete("/productos/:id")
  async deleteProducto(@Param("id") id_producto: string, req: Request, @Res() res: Response) {
    try {
      console.log(id_producto);
      const { message } = await this.productoService.deleteProducto(id_producto);
      return res.status(200).json({ message });
    } catch (err) {
      if(err instanceof AppError)
      return res.status(500).json({ message: err.message || "Error de servidor interno" });
    }
  }
}