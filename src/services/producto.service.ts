import { inject, injectable } from "inversify";
import {
  CategoryEntity,
  ProductoEntity,
  ProductoSeccion,
} from "../entities/producto.entity";
import { ProductoRepository } from "../repositories/producto.repository";
import {
  CategorySchema,
  ProductoSchema,
} from "../ts/validations/producto.validations";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class ProductoService {
  constructor(
    @inject(ProductoRepository) private productoRepository: ProductoRepository
  ) {}

  async addProducto(
    data: Omit<ProductoEntity, "id" | "idProducto">
  ): Promise<{ message: string }> {
    const productValidations = ProductoSchema.safeParse(data);

    if (!productValidations.success) {
      throw new AppError("Datos de producto inválidos", 400);
    }
    const { message } = await this.productoRepository.addProducto(
      productValidations.data as Omit<ProductoEntity, "id">
    );

    return { message };
  }
  async updateProduct({
    data,
    id,
  }: {
    data: Partial<ProductoEntity>;
    id: string;
  }) {
    const productUpdate = await this.productoRepository.updateProducto(
      id,
      data
    );
    if (!productUpdate)
      throw new AppError("No se pudo actualizar el producto", 404);
    return { message: "Producto actualizado exitosamente" };
  }
  async getAllProducto(): Promise<ProductoSeccion[]> {
    const productos = await this.productoRepository.getAllProducto();
    if (!productos || productos.length === 0)
      throw new AppError("No hay productos registrados", 404);
    return productos;
  }

  async deleteProducto(id_producto: string): Promise<{ message: string }> {
    await this.productoRepository.deleteProducto(id_producto);
    return { message: "Producto eliminado exitosamente" };
  }

  async createCategory(
    data: Omit<CategoryEntity, "id">
  ): Promise<{ message: string }> {
    const valiations = CategorySchema.safeParse(data);
    if (!valiations.success) return { message: "Datos de categoria inválidos" };

    const { message } = await this.productoRepository.createCategory(
      valiations.data
    );

    return { message };
  }

  async getAllCategory(): Promise<CategoryEntity[]> {
    const category = await this.productoRepository.getAllCategory();
    if (!category || category.length === 0)
      throw new AppError("No hay categorias registradas", 404);
    return category;
  }
}
