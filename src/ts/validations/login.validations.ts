import { z } from "zod";

export const schemaLogin = z.object({
  user_email: z.string().email("Error formato email"),
  user_password: z.string().min(8, "Error minimo 8 caracteres")
})