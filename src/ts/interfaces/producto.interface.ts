import { CategoryEntity, ProductoEntity, ProductoSeccion } from "../../entities/producto.entity"

export interface IProductos {
  addProducto:  (data: ProductoEntity) => Promise <{message: string}>
  getAllProducto: () => Promise<ProductoSeccion[]>
  deleteProducto: (id_producto: string) => Promise<void>
  createCategory: (data: Omit<CategoryEntity, "id">) => Promise <{message: string}>
  getAllCategory: () => Promise<CategoryEntity[]>
}