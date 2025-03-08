import { Container } from "inversify";
import { appBinding } from "./bindings/app.binding";
import { setupBinding } from "./bindings/setup.binding";

export const appContainer = new Container()

appContainer.load(
  setupBinding,
  appBinding
)