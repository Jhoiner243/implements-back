import {
  CategoryEntity,
  ProductoEntity,
  ProductoSeccion,
} from "../entities/producto.entity";
import { db } from "../frameworks/db/db";
import { IProductos } from "../ts/interfaces/producto.interface";
import { BaseRepository } from "../utils/tenant-id";

export class ProductoRepository extends BaseRepository implements IProductos {
  async addProducto(
    data: Omit<ProductoEntity, "id">
  ): Promise<{ message: string }> {
    const empresaId = this.getEmpresaId();
    await db.productos.create({
      data: {
        empresa_id: empresaId,
        nombre: data.nombre,
        precio_compra: data.precio_compra,
        stock: data.stock,
        categoryId: data.categoryId,
        unidadMedida: data.unidadMedida,
      },
    });
    return { message: "Producto agregado exitosamente" };
  }

  async getAllProducto(): Promise<ProductoSeccion[]> {
    const empresaId = this.getEmpresaId();
    const productos = await db.productos.findMany({
      where: {
        empresa_id: empresaId,
        avaliable: true,
      },
      include: { category: true },
    });

    return productos.map((producto) => ({
      id: producto.id,
      unidadMedida: producto.unidadMedida,
      empresa_id: producto.empresa_id,
      idProducto: producto.idProducto,
      nombre: producto.nombre,
      precio_compra: producto.precio_compra,
      stock: producto.stock,
      categoryId: producto.categoryId,
      categoryName: producto.category.name,
    }));
  }

  async deleteProducto(id_producto: string): Promise<void> {
    await db.productos.update({
      where: { id: id_producto },
      data: { avaliable: false },
    });
  }

  async getProductsDebounced({ name }: { name: string }) {
    return await db.productos.findMany({
      where: {
        nombre: {
          contains: name,
          mode: "insensitive",
        },
      },
    });
  }

  async createCategory(
    data: Omit<CategoryEntity, "id">
  ): Promise<{ message: string }> {
    try {
      const empresaId = this.getEmpresaId();

      await db.category.create({
        data: {
          empresa_id: empresaId,
          name: data.name,
        },
      });

      return { message: "Categoría creada exitosamente" };
    } catch (error) {
      console.error("Error al crear la categoría:", error);
      throw new Error("No se pudo crear la categoría");
    }
  }

  async getAllCategory(): Promise<CategoryEntity[]> {
    const empresaId = this.getEmpresaId();
    const category = await db.category.findMany({
      where: { empresa_id: empresaId },
    });
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
    const empresaId = this.getEmpresaId();
    const producto = await db.productos.findUnique({
      where: { id: id_producto, avaliable: true, empresa_id: empresaId },
    });
    return producto;
  }
}
