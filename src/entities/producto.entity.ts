export interface ProductoEntity {
  id: string;
  idProducto: number;
  empresa_id: string;
  nombre: string;
  precio_compra: number;
  stock: number;
  categoryId: string;
}
export interface ProductoSeccion extends ProductoEntity {
  categoryName: string;
}

export interface CategoryEntity {
  id: string;
  name: string;
}
