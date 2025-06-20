import { inject, injectable } from "inversify";
import { clientCreate, ClienteEntity } from "../entities/clientes.entity";
import { ClientesRepository } from "../repositories/clientes.repository";
import {
  ClienteSchema,
  ClienteUpdateSchema,
} from "../ts/validations/clientes.validations";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class ClienteService {
  constructor(
    @inject(ClientesRepository) private clienteRepository: ClientesRepository
  ) {}

  async addClient(
    data: Omit<ClienteEntity, "id">
  ): Promise<{ message: string }> {
    // Validamos los datos antes de proceder
    const validation = ClienteSchema.safeParse(data);
    if (!validation.success) {
      throw new AppError("Datos del cliente inválidos", 400);
    }

    // Guardamos el cliente validado
    const { message } = await this.clienteRepository.addClient(validation.data);
    return { message };
  }

  async getClientByID(id_cliente: string): Promise<ClienteEntity | null> {
    const cliente = await this.clienteRepository.getClientByID(id_cliente);
    if (!cliente) throw new AppError("Cliente no encontrado", 404);
    return cliente;
  }

  async deleteClient(id_cliente: string): Promise<{ message: string }> {
    await this.clienteRepository.deleteClient(id_cliente);
    return { message: "Cliente eliminado exitosamente" };
  }

  async clienteUpdate(
    id: string,
    data: Partial<clientCreate>
  ): Promise<{ message: string }> {
    const datosValidate = ClienteUpdateSchema.parse(data);

    if (!datosValidate) return { message: "Datos no validos" };

    await this.clienteRepository.updateClient(id, datosValidate);
    return { message: "¡Datos actualizados!" };
  }

  async getAllClient(): Promise<ClienteEntity[]> {
    const clientes = await this.clienteRepository.getAllClient();
    if (!clientes || clientes.length === 0)
      throw new AppError("No hay clientes registrados", 404);
    return clientes;
  }
}
