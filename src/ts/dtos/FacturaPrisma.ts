// Solo lo que tu negocio necesita, garantizado no null
export interface FacturaModel {
  clienteId: string;
  detalles: Array<{
    productoId: string;
    cantidad: number;
    precio: number;
  }>;
}
// El objeto completo que recibes (o null)
export type RawFacturaResponse = {
  detalles: Array<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    productoId: string;
    cantidad: number;
    facturaId: string;
    precio: number;
  }>;
  cliente: {
    id: string;
    createdAt: Date;
    name: string;
    email: string;
    phone: string;
    address: string;
  } | null;
  // … aquí vendrán tus campos adicionales (usa `& { ... }` si hay más) …
} | null;
