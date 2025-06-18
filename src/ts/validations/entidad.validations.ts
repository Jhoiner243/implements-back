import { BillingCycle, typePlan } from "@prisma/client";
import { z } from "zod";

export const EntidadSchema = z.object({
  nombre: z.string().min(2, "Minimo dos letras"),
  typePlan: z.enum(Object.values(typePlan) as [string, ...string[]]),
  billingCycle: z.enum(Object.values(BillingCycle) as [string, ...string[]]),
  industry: z.string(),
  contactPhone: z.bigint(),
  billingEmail: z.string().email(),
  billingAddress: z.string(),
});
