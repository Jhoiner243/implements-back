import { Express } from "express";
import { injectable } from "inversify";
import { Port } from "../../ts/types/port";
import { logger } from "../../utils/logger";

@injectable()
export class ServerSetup {
  create(app: Express, port: Port) {
    const server = app.listen(Number(port), "0.0.0.0", () => {
      logger.info(`Server is running at ${port}`);
    });
    return server;
  }
}
