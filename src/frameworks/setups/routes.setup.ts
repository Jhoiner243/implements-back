import { Express } from 'express';
import { injectable } from "inversify";
import { useExpressServer } from 'routing-controllers';
import { ClienteController } from '../../controllers/cliente.controller';
import { FacturaController } from '../../controllers/facturas.controller';
import { ProductoController } from '../../controllers/producto.controller';

@injectable()
export class RoutesSetup {
  setup(app: Express): void{
    useExpressServer(app, {
      controllers: [
        FacturaController,
        ClienteController,
        ProductoController
      ]
    })
  }
}