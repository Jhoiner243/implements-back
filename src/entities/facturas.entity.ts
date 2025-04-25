export interface FacturasEntity {
  detalles: DetallesFacturasEntity[];
  id_cliente: string;
  total: number ;
  createdAt: Date;
}


export interface DetallesFacturasEntity {
  id_producto: string;
  cantidad: number;
  precio_venta: number;
}

export interface FacturaSeccion extends FacturasEntity{
  updatedAt: Date;
  status: StatusFactura
}

export enum StatusFactura {
  Pagada = 'Pagada',
  Pendiente = 'Pendiente',
  Fiada = 'Fiada',
  Vencida = 'Vencida'
}