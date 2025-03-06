import 'reflect-metadata';
import { App } from "./src/app/app";
import { PORT } from './src/config/configs';
import { appContainer } from "./src/containers/app.container";

console.log(PORT)
const app = appContainer.get<App>(App)
app.start()