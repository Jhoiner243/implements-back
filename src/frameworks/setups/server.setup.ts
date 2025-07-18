import { Express } from "express";
import { injectable } from "inversify";
import { Port } from "../../ts/types/port";
import { logger } from "../../utils/logger";

@injectable()
export class ServerSetup {
  create(app: Express, port: Port) {
    if (typeof port !== "number") {
      throw new Error("Port must be a number");
    }
    const server = app.listen(port, "0.0.0.0", () => {
      logger.info(`Server is running at ${port}`);
    });
    return server;
  }
}
