import { inject } from "inversify";
import { Get, JsonController } from "routing-controllers";
import { AnaliticsService } from "../services/analitics.service";
import { GrowthRateService } from "../services/growt-rate.service";
import { BaseController } from "./base.controller";

@JsonController("/analitics")
export class AnaliticsController implements BaseController {
  constructor(
    @inject(AnaliticsService) private analiticsService: AnaliticsService,
    @inject(GrowthRateService) private growtRateService: GrowthRateService
  ) {}

  @Get("/pedidos")
  async getAnalitIcsPedidos() {
    const analitics = await this.analiticsService.getAnalitIcsPedidos();
    return analitics;
  }
  @Get("/clientes")
  async getAnaliticsClientes() {
    const analitics = await this.analiticsService.getAnaliticsClientes();
    return analitics;
  }

  @Get("/growt-rate")
  async getDataGrowtRate() {
    return await this.growtRateService.getDataGrowtRate();
  }

  @Get("/productos")
  async getAnaliticsProductos() {
    const analitics = await this.analiticsService.getAnaliticsProductos();
    return analitics;
  }
}
