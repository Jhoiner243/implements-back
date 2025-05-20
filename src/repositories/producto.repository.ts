import {
  CategoryEntity,
  ProductoEntity,
  ProductoSeccion,
} from "../entities/producto.entity";
import { db } from "../frameworks/db/db";
import { IProductos } from "../ts/interfaces/producto.interface";
import { AppError } from "../utils/errors/app-errors";

export class ProductoRepository implements IProductos {
  async addProducto(
    data: Omit<ProductoEntity, "id">
  ): Promise<{ message: string }> {
    await db.productos.create({
      data: {
        nombre: data.nombre,
        precio_compra: data.precio_compra,
        stock: data.stock,
        categoryId: data.categoryId,
      },
    });
    return { message: "Producto agregado exitosamente" };
  }

  async getAllProducto(): Promise<ProductoSeccion[]> {
    const productos = await db.productos.findMany({
      include: { category: true },
    });

    if (!productos || productos.length === 0)
      throw new AppError("No hay productos registrados", 404);
    return productos.map((producto) => ({
      id: producto.id,
      nombre: producto.nombre,
      precio_compra: producto.precio_compra,
      stock: producto.stock,
      categoryId: producto.categoryId,
      categoryName: producto.category.name,
    }));
  }

  async deleteProducto(id_producto: string): Promise<void> {
    await db.productos.delete({
      where: { id: id_producto },
    });
  }

  async createCategory(
    data: Omit<CategoryEntity, "id">
  ): Promise<{ message: string }> {
    await db.category.create({
      data: {
        name: data.name,
      },
    });
    return { message: "Categoria agregada exitosamente" };
  }

  async getAllCategory(): Promise<CategoryEntity[]> {
    const category = await db.category.findMany();
    return category;
  }
  async updateProducto(
    id_producto: string,
    data: Partial<ProductoEntity>
  ): Promise<{ message: string }> {
    await db.productos.update({
      where: { id: id_producto },
      data: {
        nombre: data.nombre,
        precio_compra: data.precio_compra,
        stock: data.stock,
        categoryId: data.categoryId,
      },
    });
    return { message: "Producto actualizado exitosamente" };
  }
  async getById(id_producto: string): Promise<ProductoEntity | null> {
    const producto = await db.productos.findUnique({
      where: { id: id_producto },
    });
    return producto;
  }
}
