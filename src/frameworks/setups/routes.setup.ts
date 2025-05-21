import { CorsOptions } from "cors";
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

const corsOptions: CorsOptions = {
  origin: "http://localhost:5173", // Asegúrate de que este sea el origen correcto
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
