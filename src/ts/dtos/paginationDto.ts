import { StatusFactura } from "@prisma/client";

export interface PanginationDto {
  page?: number;
  limit?: number;
  status?: StatusFactura;
}
