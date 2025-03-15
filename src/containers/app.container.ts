import { Container } from "inversify";
import { appBinding } from "./bindings/app.binding";
import { clientesBinding } from "./bindings/clientes.binding";
import { facturasBindig } from "./bindings/facturas.binding";
import { productosBinding } from "./bindings/productos.binding";
import { setupBinding } from "./bindings/setup.binding";

export const appContainer = new Container()

appContainer.load(
  setupBinding,
  facturasBindig,
  clientesBinding,
  productosBinding,
  appBinding,
)