import { Container } from "inversify";
import { analiticsBinding } from "./bindings/analitics.binding";
import { appBinding } from "./bindings/app.binding";
import { authBinding } from "./bindings/auth.binding";
import { cacheBinding } from "./bindings/cache.binding";
import { clientesBinding } from "./bindings/clientes.binding";
import { entidadesBinding } from "./bindings/entidades.binding";
import { facturasBindig } from "./bindings/facturas.binding";
import { gananciasBinding } from "./bindings/ganancias .binding";
import { mcpBinding } from "./bindings/mcp.bindig";
import { notificationsBinding } from "./bindings/notifications-stock.binding";
import { productosBinding } from "./bindings/productos.binding";
import { setupBinding } from "./bindings/setup.binding";

export const appContainer = new Container();
appContainer.load(
  setupBinding,
  entidadesBinding,
  facturasBindig,
  clientesBinding,
  productosBinding,
  gananciasBinding,
  notificationsBinding,
  analiticsBinding,
  authBinding,
  mcpBinding,
  cacheBinding,
  appBinding
);
