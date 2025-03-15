import { ContainerModule, interfaces } from "inversify";
import { ClienteController } from "../../controllers/cliente.controller";
import { ClientesRepository } from "../../repositories/clientes.repository";
import { ClienteService } from "../../services/clientes.service";

export const clientesBinding = new ContainerModule((bind: interfaces.Bind) => {
  bind(ClienteController).toSelf()
  bind(ClienteService).toSelf()
  bind(ClientesRepository).toSelf()
})