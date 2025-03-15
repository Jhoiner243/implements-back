import 'reflect-metadata';
import { useContainer } from 'routing-controllers';
import { App } from "./app/app";
import { appContainer } from "./containers/app.container";

const app = appContainer.get<App>(App)
app.start()
useContainer(appContainer)