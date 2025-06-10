import { z } from "zod";

export const schemaRegister = z.object({
  user_name: z.string().min(3, "Error minimo 3 caracteres"),
  user_lastname: z.string().min(3, "Error minimo 3 caracteres"),
  user_email: z.string().email("Error formato email"),
  user_password: z.string().min(8, "Error minimo 8 caracteres"),
});
