import { ContainerModule, interfaces } from "inversify";
import { FacturaController } from "../../controllers/facturas.controller";
import { FacturaRepository } from "../../repositories/factura.repository";
import { FacturaService } from "../../services/factura.service";

export const facturasBindig = new ContainerModule((bind: interfaces.Bind) => {
  bind(FacturaController).toSelf()
  bind(FacturaService).toSelf()
  bind(FacturaRepository).toSelf()
})