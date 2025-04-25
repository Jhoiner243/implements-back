import { inject } from "inversify";
import { Get, JsonController } from "routing-controllers";
import { AnaliticsService } from "../services/analitics.service";
import { BaseController } from "./base.controller";

@JsonController('/analitics')
export class AnaliticsController implements BaseController{
    constructor(@inject(AnaliticsService) private analiticsService: AnaliticsService) {}

    @Get('/pedidos')
    async getAnalitIcsPedidos() {
        const analitics = await this.analiticsService.getAnalitIcsPedidos();
        return analitics;
    }
    @Get('/clientes')
    async getAnaliticsClientes() {
        const analitics = await this.analiticsService.getAnaliticsClientes();
        return analitics;
    }

    @Get('/productos')
    async getAnaliticsProductos() {
        const analitics = await this.analiticsService.getAnaliticsProductos();
        return analitics;
    }
}