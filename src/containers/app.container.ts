import { Container } from "inversify";
import { analiticsBinding } from "./bindings/analitics.binding";
import { appBinding } from "./bindings/app.binding";
import { authBinding } from "./bindings/auth.binding";
import { clientesBinding } from "./bindings/clientes.binding";
import { facturasBindig } from "./bindings/facturas.binding";
import { gananciasBinding } from "./bindings/ganancias .binding";
import { notificationsBinding } from "./bindings/notifications-stock.binding";
import { productosBinding } from "./bindings/productos.binding";
import { setupBinding } from "./bindings/setup.binding";

export const appContainer = new Container()

appContainer.load(
  setupBinding,
  facturasBindig,
  clientesBinding,
  productosBinding,
  gananciasBinding,
  notificationsBinding,
  analiticsBinding,
  authBinding,
  appBinding,
)