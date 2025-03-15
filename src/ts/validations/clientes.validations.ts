import z from 'zod'

export const ClienteSchema = z.object({
  name: z.string().min(3, "Error minimo 3 caracteres"),
  email: z.string().email(),
  phone: z.string().min(10, "Minimo 10 caracteres de número").max(10, "Error "),
  address: z.string().min(5, "Error minimo 5 caracteres"),
})