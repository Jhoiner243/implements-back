import { ClienteEntity } from "../../entities/clientes.entity";

export interface IClientes {
  addClient:  (data: ClienteEntity) => Promise <{message: string}>
  getClientByID: (id_cliente: string) => Promise<ClienteEntity | null>
  getAllClient: () => Promise<ClienteEntity[]>
  deleteClient: (id_cliente: string) => Promise<void>
}