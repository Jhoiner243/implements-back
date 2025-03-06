import express, { Express } from "express";
import { inject, injectable } from "inversify";
import { PORT } from "../config/configs";
import { MiddlewaresSetup } from "../frameworks/setups/middlewares.setup";
import { ServerSetup } from "../frameworks/setups/server.setup";
import { Port } from "../ts/types/port";

@injectable()
export class App {
  private app: Express;
  private port: Port;

  constructor(
    @inject(ServerSetup) private serverSetup: ServerSetup,
    @inject(MiddlewaresSetup) private middlewaresSetup: MiddlewaresSetup
  ){
    this.app = express()
    this.port =  PORT
  }

  async start(){
    this.middlewaresSetup.init(this.app)
   this.serverSetup.create(this.app, this.port)
  }
}