import {
  CategoryEntity,
  ProductoEntity,
  ProductoSeccion,
} from "../entities/producto.entity";
import { db } from "../frameworks/db/db";
import { IProductos } from "../ts/interfaces/producto.interface";

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
      where: {
        avaliable: true,
      },
      include: { category: true },
      cacheStrategy: {
        ttl: 300,
        swr: 600,
        tags: ["catalog_products"],
      },
    });

    return productos.map((producto) => ({
      id: producto.id,
      idProducto: producto.idProducto,
      nombre: producto.nombre,
      precio_compra: producto.precio_compra,
      stock: producto.stock,
      categoryId: producto.categoryId,
      categoryName: producto.category.name,
    }));
  }

  async deleteProducto(id_producto: string): Promise<void> {
    await db.$accelerate.invalidate({ tags: ["catalog_products"] });

    await db.productos.update({
      where: { id: id_producto },
      data: { avaliable: false },
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
    await db.$accelerate.invalidate({ tags: ["catalog_products"] });

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
      where: { id: id_producto, avaliable: true },
    });
    return producto;
  }
}
