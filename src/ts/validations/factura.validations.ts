import { z } from "zod";

export const DetallesFacturasEntitySchema = z.object({
  id_producto: z.string(),
  cantidad: z.number().min(1),
  precio_venta: z.number(),
  porcentage_descuento: z.number().optional(),
});

export const FacturasEntitySchema = z.object({
  detalles: z.array(DetallesFacturasEntitySchema),
  id_cliente: z.string(),
  total: z.number(),
});
