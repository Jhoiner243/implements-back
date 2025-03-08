import 'reflect-metadata';
import { App } from "./src/app/app";
import { appContainer } from "./src/containers/app.container";

const app = appContainer.get<App>(App)
app.start()