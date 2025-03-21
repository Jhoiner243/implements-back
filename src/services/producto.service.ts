import { inject, injectable } from "inversify";
import { CategoryEntity, ProductoEntity } from "../entities/producto.entity";
import { ProductoRepository } from "../repositories/producto.repository";
import { CategorySchema, ProductoSchema } from "../ts/validations/producto.validations";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class ProductoService {
  constructor(@inject(ProductoRepository) private productoRepository: ProductoRepository) {} 

  async addProducto(data: Omit<ProductoEntity, 'id'>): Promise<{ message: string }> {
    const productValidations = ProductoSchema.safeParse(data);

    if (!productValidations.success) {
          throw new AppError("Datos de producto inválidos", 400);
        }
    const {message} = await this.productoRepository.addProducto(productValidations.data);

    return {message}
  }

  async getAllProducto(): Promise<ProductoEntity[]> {
    const productos = await this.productoRepository.getAllProducto();
    if (!productos || productos.length === 0) throw new AppError("No hay productos registrados", 404);
    return productos;
  }

  async deleteProducto(id_producto: string): Promise<{ message: string }> {
    await this.productoRepository.deleteProducto(id_producto);
    return {message: "Producto eliminado exitosamente" };
  }

  async createCategory(data: Omit<CategoryEntity, "id">): Promise<{message: string}>{

    const valiations = CategorySchema.safeParse(data);
    if(!valiations.success) return {message: "Datos de categoria inválidos"};

    const {message} = await this.productoRepository.createCategory(valiations.data);

    return {message}
  }
}