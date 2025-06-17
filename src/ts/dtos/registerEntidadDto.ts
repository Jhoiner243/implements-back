import { BillingCycle, typePlan } from "@prisma/client";

export interface RegisterEntidad {
  nombre: string;
  createBy: string;
  organizationId: string;
  typePlan: typePlan;
  billingCycle: BillingCycle;
  industry: string;
  contactPhone: number;
  billingEmail: string;
  billingAddress: string;
}

export interface CreatedEntity extends RegisterEntidad {
  id: string;
  createdAt: Date;
  status: "active" | "pending" | "inactive";
}
