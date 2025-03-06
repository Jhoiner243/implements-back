import { Express } from 'express';
import { injectable } from "inversify";
import { useContainer, useExpressServer } from 'routing-controllers';
import { appContainer } from "../../containers/app.container";

@injectable()
export class RoutesSetup {
  setup(app: Express): void{
    useContainer(appContainer)
    useExpressServer(app, {
      controllers: [
        //AuthController
      ]
    })
  }
}