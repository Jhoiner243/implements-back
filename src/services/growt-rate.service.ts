import { TipoPeriodo } from "@prisma/client";
import { differenceInCalendarDays, format, startOfDay } from "date-fns";
import { injectable } from "inversify";
import { z } from "zod";

// Tipos de datos para los periodos
interface DataPeriodos {
  total: number;
  fecha: Date;
}

interface IGrowthRate {
  tipoPeriodo: TipoPeriodo;
  ganaciaTotalActual: DataPeriodos;
  periodoAnterior: DataPeriodos;
}

interface ResultPeriodoRate {
  periodo: TipoPeriodo;
  fechas: {
    fechaActual: string;
    fechaAnterior: string;
  };
  growthRate: number;
}

// Validación con Zod
const schemaGrowthRate = z.object({
  tipoPeriodo: z.nativeEnum(TipoPeriodo),
  ganaciaTotalActual: z.object({
    total: z.number(),
    fecha: z.date(),
  }),
  periodoAnterior: z.object({
    total: z.number(),
    fecha: z.date(),
  }),
});

@injectable()
export class GrowthRateService {
  /**
   * Calcula el porcentaje de crecimiento entre dos periodos.
   */
  async earningPeriod({
    data,
  }: {
    data: IGrowthRate;
  }): Promise<ResultPeriodoRate> {
    if (!data) {
      throw new Error("No hay datos de periodos");
    }

    const validData = schemaGrowthRate.parse(data);

    const { tipoPeriodo, ganaciaTotalActual, periodoAnterior } = validData;

    const validFechasForIsLeen = await this.dateValid({
      fechas: {
        actual: ganaciaTotalActual.fecha,
        anterior: periodoAnterior.fecha,
      },
    });

    const fechaActual = this.formatFecha(ganaciaTotalActual.fecha, tipoPeriodo);
    const fechaAnterior = this.formatFecha(periodoAnterior.fecha, tipoPeriodo);

    const diferencia = ganaciaTotalActual.total - periodoAnterior.total;
    const growthRate =
      validFechasForIsLeen === false // SI la validacion es false significa que no hay fecha de periodo anterior por lo tanto la ganancia es de 100%
        ? 100 // si no hay valor anterior, consideramos 100% de crecimiento
        : (diferencia / periodoAnterior.total) * 100;

    return {
      periodo: tipoPeriodo,
      fechas: {
        fechaActual,
        fechaAnterior,
      },
      growthRate: Number(growthRate), // opcional: redondeo a 2 decimales
    };
  }

  /**
   * Formatea la fecha según el tipo de periodo.
   */
  private formatFecha(fecha: Date, tipo: TipoPeriodo): string {
    switch (tipo) {
      case "Diario":
        return format(fecha, "dd/MM/yyyy");
      case "Semanal":
        return `Semana ${format(fecha, "w")} - ${format(fecha, "yyyy")}`;
      case "Mensual":
        return format(fecha, "MMMM yyyy");
      case "Anual":
        return format(fecha, "yyyy");
      default:
        return format(fecha, "dd/MM/yyyy");
    }
  }

  private async dateValid({
    fechas,
  }: {
    fechas: { anterior: Date; actual: Date };
  }): Promise<boolean> {
    if (!fechas) return false;

    // Normalizar ambas fechas al inicio del día (00:00:00)
    const fechaActual = startOfDay(fechas.actual);
    const fechaAnterior = startOfDay(fechas.anterior);

    // Calcular diferencia en días
    const diferencia = differenceInCalendarDays(fechaActual, fechaAnterior);

    // Verificar si la diferencia es de exactamente un día
    return diferencia === 1;
  }
}
