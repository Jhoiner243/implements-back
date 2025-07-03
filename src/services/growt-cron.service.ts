import { format } from "date-fns";
import { inject, injectable } from "inversify";
import { NotificationsEntity } from "../entities/notifications.entity";
import messaging from "../frameworks/firabase-admin/admin.sdk";
import { AuthRepository } from "../repositories/auth.repository";
import { EntidadesRepository } from "../repositories/entidades.repository";
import { GananciasRepository } from "../repositories/ganancias.repository";
import { NotificationsRepository } from "../repositories/notifications.repository";
import { GrowthRateService } from "./growt-rate.service";

@injectable()
export class AutomatedGrowthIndex {
  constructor(
    @inject(GrowthRateService) private growtRateService: GrowthRateService,
    @inject(GananciasRepository) private profitSummary: GananciasRepository,
    @inject(AuthRepository) private userToken: AuthRepository,
    @inject(NotificationsRepository)
    private notificationRepository: NotificationsRepository,
    @inject(EntidadesRepository) private entidades: EntidadesRepository
  ) {}

  async cronAutomatedCall(): Promise<void | null> {
    try {
      const entidades = await this.entidades.getAllEntidadesId();

      entidades.forEach(async (entidad: { id: string }) => {
        const empresaId = entidad.id;
        const diaActual = await this.profitSummary.getProfitForCron({
          empresaId,
        });
        const mapData = (diaActual ?? []).map((data) => ({
          tipoPeriodo: data.tipo_periodo,
          fecha: data.createdAt,
          gananciaTotal: data.ganancia_total,
        }));

        if (mapData[0] && mapData[1]) {
          const resultado: void = await this.growtRateService.earningPeriod({
            data: {
              ganaciaTotalActual: {
                fecha: mapData[1].fecha,
                total: mapData[1].gananciaTotal,
              },
              periodoAnterior: {
                fecha: mapData[0].fecha,
                total: mapData[0].gananciaTotal,
              },
              tipoPeriodo: "Diario",
            },
          });

          return resultado;
        }
        return null;
      });
    } catch (err) {
      console.error("Error al crear growth rate:", err);
      throw new Error("Error al crear growth rate");
    }
  }

  // Notificaciones de las ganancias diarias al final del día para para que el ususario sepa las ganancias de ese día
  async messagingProfitTotal() {
    const totalProfit = await this.profitSummary.getProfitLast();
    const userTokens = await this.userToken.usersToken();

    const formatData = format(totalProfit[0].createdAt, "dd/MM/yyyy");
    const mapData = userTokens.find((data) => ({
      id: data.id,
      token: data.token,
    }));

    if (mapData?.id && mapData.token) {
      const notificationData: NotificationsEntity = {
        user: mapData?.id,
        message: {
          message: `Ganancia total del día ${formatData} fué de ${totalProfit[0].ganancia_total}`,
          tokens: [mapData?.token],
          sent: false,
        },
      };

      const response = await messaging.sendEachForMulticast({
        notification: {
          title: "Ganancia del día",
          body: notificationData.message.message,
        },
        tokens: notificationData.message.tokens,
      });

      notificationData.message.sent = response.successCount > 0;

      if (response.failureCount > 0) {
        notificationData.error = `Errores: ${
          response.responses.filter((r) => !r.success).length
        }`;
      }

      // 6. Guardar en base de datos usando el repositorio
      await this.notificationRepository.sendMulticasteNotifications(
        notificationData
      );
    }
  }
}
