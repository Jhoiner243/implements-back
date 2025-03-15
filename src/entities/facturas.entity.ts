export interface FacturasEntity {
  id_usuario: string ;
  detalles: DetallesFacturasEntity[];
  id_cliente: string;
  total: number ;
}

export interface DetallesFacturasEntity {
  id_factura: string;
  id_producto: string;
  cantidad: number;
  precio_venta: number;
}