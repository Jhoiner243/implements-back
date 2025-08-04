export interface FacturasEntity {
  detalles: DetallesFacturasEntity[];
  id_cliente: string;
  total: number;
  createdAt: Date;
}

export interface DetallesFacturasEntity {
  id_producto: string;
  cantidad: number;
  precio_venta: number;
  porcentage_descuento?: number;
}

export interface FacturaSeccion extends FacturasEntity {
  updatedAt: Date;
  qr: string;
  status: StatusFactura;
  idFactura: number;
}
export interface FacturaAdapter {
  detalles: [
    {
      id_producto: string | null;
      cantidad: number;
      precio_venta: number;
      porcentage_descuento: number;
    }
  ];
  id_cliente: string | null;
  total: number;
  createdAt: Date;
}

export enum StatusFactura {
  Pagada = "Pagada",
  Pendiente = "Pendiente",
  Fiada = "Fiada",
  Vencida = "Vencida",
}
