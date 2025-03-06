import express, { Express } from "express";
import { inject, injectable } from "inversify";
import { PORT } from "../config/configs";
import { ServerSetup } from "../frameworks/setups/server.setup";
import { Port } from "../ts/types/port";


@injectable()
export class App {
  private app: Express;
  private port: Port;

  constructor(
    @inject(ServerSetup) private serverSetup: ServerSetup
  ){
    this.app = express()
    this.port =  PORT
  }

  async start(){
   this.serverSetup.create(this.app, this.port)
  }
}