export interface GananciasEntity {
  id: string;
  tipo_periodo: string;
  ganancia_total: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  createdAt: Date;
}

export enum TipoPeriodo {
  Diario = "diario",
  Semanal = "semanal",
  Mensual = "mensual",
  Anual = "anual",
}
