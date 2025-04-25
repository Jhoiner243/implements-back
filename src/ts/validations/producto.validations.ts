import z from 'zod'

export const ProductoSchema = z.object({
  nombre: z.string().min(3, "Error minimo 3 caracteres"),
  precio_compra: z.number().min(1000, "Error precio minimo $1.000"),
  stock: z.number().min(1, "Error minimo 1"),
  categoryId: z.string(),
})

export const CategorySchema = z.object({
  name: z.string().min(3, "Error minimo 3 caracteres")
})