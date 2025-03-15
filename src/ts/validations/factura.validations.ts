import { z } from "zod";

export const DetallesFacturasEntitySchema = z.object({
  id_factura: z.string(),
  id_producto: z.string(),
  cantidad: z.number(),
  precio_venta: z.number(),
});

export const FacturasEntitySchema = z.object({
  id_usuario: z.string().default("Se espera un id de usuario"),
  detalles: z.array(DetallesFacturasEntitySchema),
  id_cliente: z.string(),
  total: z.number(),
});
