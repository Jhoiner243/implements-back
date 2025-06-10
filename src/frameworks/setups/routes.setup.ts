import { CorsOptions } from "cors";
import dotenv from "dotenv";
import { Express } from "express";
import { injectable } from "inversify";
import { useExpressServer } from "routing-controllers";
import { AnaliticsController } from "../../controllers/analitics.controller";
import { AuthController } from "../../controllers/auth.controller";
import { ClienteController } from "../../controllers/cliente.controller";
import { FacturaController } from "../../controllers/facturas.controller";
import { GananciasController } from "../../controllers/ganancias.controller";
import { McpController } from "../../controllers/mcp.controller";
import { NotificationsController } from "../../controllers/notification-stock.controller";
import { ProductoController } from "../../controllers/producto.controller";
dotenv.config();

const corsOptions: CorsOptions = {
  origin: process.env.URL_PORT_FRONTEND,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Authorization",
    "Bearer",
    "Referer",
    "User-Agent",
    "Sec-Fetch-Dest",
    "X-Forwarded-Proto",
    "X-Forwarded-Host",
    "Accept",
    "Host",
  ],
  exposedHeaders: ["Authorization"],
};
@injectable()
export class RoutesSetup {
  setup(app: Express): void {
    useExpressServer(app, {
      cors: corsOptions,
      controllers: [
        FacturaController,
        ClienteController,
        ProductoController,
        NotificationsController,
        AnaliticsController,
        AuthController,
        McpController,
        GananciasController,
      ],
    });
  }
}
