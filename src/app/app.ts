import express, { Express } from "express";
import { inject, injectable } from "inversify";
import { PORT } from "../config/configs";
import { MCPClient } from "../frameworks/mcp-client";
import { MiddlewaresSetup } from "../frameworks/setups/middlewares.setup";
import { RoutesSetup } from "../frameworks/setups/routes.setup";
import { ServerSetup } from "../frameworks/setups/server.setup";
import { TerminusSetup } from "../frameworks/setups/terminus.setup";
import { Port } from "../ts/types/port";

@injectable()
export class App {
  private app: Express;
  private port: Port;

  constructor(
    @inject(MiddlewaresSetup) private middlewaresSetup: MiddlewaresSetup,
    @inject(RoutesSetup) private routesSetup: RoutesSetup,
    @inject(ServerSetup) private serverSetup: ServerSetup,
    @inject(MCPClient) private mcpClient: MCPClient,
    @inject(TerminusSetup) private terminusSetup: TerminusSetup
  ) {
    this.app = express();
    this.port = PORT;
  }

  start(): void {
    this.middlewaresSetup.init(this.app);
    this.mcpClient.connectToServer();
    this.routesSetup.setup(this.app);
    const server = this.serverSetup.create(this.app, this.port);

    this.terminusSetup.setup(server);
    this.mcpClient.cleanup();
  }
}
