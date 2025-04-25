import { z } from "zod";

export const DetallesFacturasEntitySchema = z.object({
  id_producto: z.string(),
  cantidad: z.number(),
  precio_venta: z.number(),
});

export const FacturasEntitySchema = z.object({
  detalles: z.array(DetallesFacturasEntitySchema),
  id_cliente: z.string(),
  total: z.number(),
});
