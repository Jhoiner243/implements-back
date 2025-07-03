import { BillingCycle, typePlan } from "@prisma/client";

export interface RegisterEntidad {
  nombre: string;
  createBy: string;
  organizationId: string;
  typePlan: typePlan;
  billingCycle: BillingCycle;
  industry: string;
  contactPhone: bigint | number;
  billingEmail: string;
  billingAddress: string;
}

export interface CreatedEntity {
  id: string;
  createdAt: Date;
  organizationId: string;
  status: "active" | "pending" | "inactive";
  nombre: string;
  typePlan: typePlan;
  billingCycle: BillingCycle;
  industry: string;
  contactPhone: number;
  billingEmail: string;
  billingAddress: string;
}
