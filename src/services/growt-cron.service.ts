import { inject, injectable } from "inversify";
import { GananciasRepository } from "../repositories/ganancias.repository";
import { GrowthRateService } from "./growt-rate.service";

@injectable()
export class AutomatedGrowthIndex {
  constructor(
    @inject(GrowthRateService) private growtRateService: GrowthRateService,
    @inject(GananciasRepository) private profitSummary: GananciasRepository
  ) {}

  async cronAutomatedCall(): Promise<void | null> {
    try {
      const diaActual = await this.profitSummary.getProfitForCron(); // Datos de hoy
      const mapData = (diaActual ?? []).map((data) => ({
        tipoPeriodo: data.tipo_periodo,
        fecha: data.createdAt,
        gananciaTotal: data.ganancia_total,
      }));

      if (mapData[0] && mapData[1]) {
        const resultado: void = await this.growtRateService.earningPeriod({
          data: {
            ganaciaTotalActual: {
              fecha: mapData[0].fecha,
              total: mapData[0].gananciaTotal,
            },
            periodoAnterior: {
              fecha: mapData[1].fecha,
              total: mapData[1].gananciaTotal,
            },
            tipoPeriodo: "Diario",
          },
        });

        return resultado;
      }
      return null;
    } catch (err) {
      console.error("Error al crear growth rate:", err);
      throw new Error("Error al crear growth rate");
    }
  }
}
