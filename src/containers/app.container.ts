import { Container } from "inversify";
import { appBinding } from "./bindings/app.binding";
import { serverBinding } from "./bindings/server.binding";

export const appContainer = new Container()

appContainer.load(
  appBinding,
  serverBinding
)