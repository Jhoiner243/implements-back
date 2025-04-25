import { ClienteEntity } from "../../entities/clientes.entity";
import { FacturasEntity } from "../../entities/facturas.entity";
import { ProductoEntity } from "../../entities/producto.entity";

export interface Analytics {
  getAnalitIcsPedidos: () => Promise<FacturasEntity[]>;
  getAnaliticsClientes: () => Promise<ClienteEntity[]>;
  getAnaliticsProductos: () => Promise<ProductoEntity[]>
 }