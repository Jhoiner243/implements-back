import { ContainerModule, interfaces } from "inversify";
import { FacturaController } from "../../controllers/facturas.controller";
import { SubmitDianFactus } from "../../frameworks/factus-dian";
import { AuthFactusApi } from "../../frameworks/factus-dian/auth";
import { FacturaRepository } from "../../repositories/factura.repository";
import { FacturaService } from "../../services/factura.service";

export const TYPESFACT = {
  SubmitDian: Symbol.for("SubmitDianFactus"),
  AuthFactusApi: Symbol.for("AuthFactusApi"),
};

export const facturasBindig = new ContainerModule((bind: interfaces.Bind) => {
  bind(FacturaController).toSelf();
  bind(AuthFactusApi).toSelf();
  bind(SubmitDianFactus).toSelf();
  bind(FacturaService).toSelf();
  bind(FacturaRepository).toSelf();
});
