import express, { Express } from "express";
import { inject, injectable } from "inversify";
import { PORT } from "../config/configs";
import { MiddlewaresSetup } from "../frameworks/setups/middlewares.setup";
import { RoutesSetup } from "../frameworks/setups/routes.setup";
import { ServerSetup } from "../frameworks/setups/server.setup";
import { Port } from "../ts/types/port";


@injectable()
export class App {
  private app: Express;
  private port: Port;

  constructor(
    @inject(MiddlewaresSetup) private middlewaresSetup: MiddlewaresSetup,
    @inject(RoutesSetup) private routesSetup: RoutesSetup,
    @inject(ServerSetup) private serverSetup: ServerSetup,
  ){
    this.app = express()
    this.port =  PORT
  }

    start(): void {
    this.routesSetup.setup(this.app)
    this.middlewaresSetup.init(this.app)
   this.serverSetup.create(this.app, this.port)
  }
}