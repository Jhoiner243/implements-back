import { UnidadesMedidaProducts } from "@prisma/client";
import z from "zod";

export const ProductoSchema = z.object({
  nombre: z.string().min(3, "Error mínimo 3 caracteres"),
  precio_compra: z.number().min(1000, "Error: precio mínimo $1.000"),
  stock: z.number().min(1, "Error: mínimo 1"),
  categoryId: z.string(),
  unidadMedida: z.nativeEnum(UnidadesMedidaProducts),
});

export const CategorySchema = z.object({
  name: z.string().min(3, "Error mínimo 3 caracteres"),
});

export const ProductoUpdateSchema = z.object({
  nombre: z.string().min(3, "Error mínimo 3 caracteres").optional(),
  precio_compra: z.number().min(1000, "Error: precio mínimo $1.000").optional(),
  stock: z.number().min(1, "Error: mínimo 1").optional(),
  categoryId: z.string().optional(),
  unidadMedida: z.nativeEnum(UnidadesMedidaProducts).optional(), // Agregado para mantener coherencia
});
