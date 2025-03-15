import { CategoryEntity, ProductoEntity } from "../entities/producto.entity";
import { db } from "../frameworks/db/db";
import { IProductos } from "../ts/interfaces/producto.interface";
import { AppError } from "../utils/errors/app-errors";

export class ProductoRepository implements IProductos {
  async addProducto(data: Omit<ProductoEntity, "id">): Promise<{ message: string }> {
    const productoCreate = await db.productos.create({
      data: {
        nombre: data.nombre,
        precio_compra: data.precio_compra,
        stock: data.stock,
        category: {
          connect: {
            id: data.categoryId
          }
        }
      }
    })

    if(!productoCreate) return {message: "Producto no agregado"}

    return {message: "Producto agregado exitosamente"}
 }

 async getAllProducto(): Promise<ProductoEntity[]> {
  const productos = await db.productos.findMany()
  if (!productos || productos.length === 0) throw new AppError("No hay productos registrados", 404)
  return productos
 }

 async deleteProducto(id_producto: string): Promise<void>{
  await db.productos.delete({
    where: {id: id_producto}
  })
 }

 async createCategory(data: Omit<CategoryEntity, "id">): Promise<{message: string}> {
    await db.category.create({
      data: {
        name: data.name
      }
    })
    return {message: "Categoria agregada exitosamente"}
 }
}