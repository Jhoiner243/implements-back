import { BillingCycle, typePlan } from "@prisma/client";

export interface RegisterEntidad {
  nombre: string;
  typePlan: typePlan;
  billingCycle: BillingCycle;
  industry: string;
  contactPhone: number;
  billingEmail: string;
  billingAddress: string;
}
