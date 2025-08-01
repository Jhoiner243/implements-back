import z from "zod";

export const ClienteSchema = z.object({
  identification: z.string().min(10).max(10, "Minimo y maxímo 10 caracteres"),
  name: z.string().min(3, "Error minimo 3 caracteres"),
  email: z.string().email(),
  phone: z.string().min(10, "Minimo 10 caracteres de número").max(10, "Error "),
  address: z.string().min(5, "Error minimo 5 caracteres"),
});
export const ClienteUpdateSchema = z.object({
  name: z.string().min(3, "Error mínimo 3 caracteres").optional(),
  email: z.string().email().optional(),
  phone: z
    .string()
    .min(10, "Mínimo 10 caracteres de número")
    .max(10, "Error")
    .optional(),
  address: z.string().min(5, "Error mínimo 5 caracteres").optional(),
});
