import 'reflect-metadata';
import { useContainer } from 'routing-controllers';
import { App } from "./app/app";
import { appContainer } from "./containers/app.container";
import { startNotifications } from './frameworks/firabase-admin/messaging';
import { GananciasService } from './services/ganancias.service';
import { NotificationsService } from './services/notifications.service';
import { startProfitCronJob } from './utils/cron-profit';

useContainer(appContainer)
const app = appContainer.get<App>(App)
const ganacias = appContainer.get(GananciasService)
const notificaciones = appContainer.get(NotificationsService)


app.start()
startProfitCronJob(ganacias)
startNotifications(notificaciones)