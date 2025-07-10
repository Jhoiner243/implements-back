import { inject, injectable } from "inversify";
import { ClienteCacheService } from "../cache/cliente.cache";
import { TYPESCACHE } from "../containers/bindings/cache.binding";
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
    @inject(ClientesRepository) private clienteRepository: ClientesRepository,
    @inject(TYPESCACHE.ClienteCacheService)
    private clienteCache: ClienteCacheService
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
    // Invalida el cache de listados de clientes
    await this.clienteCache.invalidateClienteListCache();
    return { message };
  }

  async getClientByID(id_cliente: string): Promise<ClienteEntity | null> {
    const cliente = await this.clienteRepository.getClientByID(id_cliente);
    if (!cliente) throw new AppError("Cliente no encontrado", 404);
    return cliente;
  }

  async deleteClient(id_cliente: string): Promise<{ message: string }> {
    await this.clienteRepository.deleteClient(id_cliente);
    // Invalida el cache de listados de clientes
    await this.clienteCache.invalidateClienteListCache();
    return { message: "Cliente eliminado exitosamente" };
  }

  async clienteUpdate(
    id: string,
    data: Partial<clientCreate>
  ): Promise<{ message: string }> {
    const datosValidate = ClienteUpdateSchema.parse(data);

    if (!datosValidate) return { message: "Datos no validos" };

    await this.clienteRepository.updateClient(id, datosValidate);
    // Invalida el cache de listados de clientes
    await this.clienteCache.invalidateClienteListCache();
    return { message: "¡Datos actualizados!" };
  }

  async getAllClient(
    limit = 10,
    page = 1
  ): Promise<{ clientes: ClienteEntity[]; total: number; lastPage: number }> {
    // Obtiene la versión actual del listado
    const version = await this.clienteCache.getCurrentVersion();
    // Intenta obtener el listado cacheado
    const cached = await this.clienteCache.getClienteListCache<{
      clientes: ClienteEntity[];
      total: number;
      lastPage: number;
    }>(limit, page, version);
    if (cached) {
      return cached;
    }
    // Si no hay cache, consulta la base de datos
    const [clientes, total] = await Promise.all([
      this.clienteRepository.getAllClient(limit, page),
      this.clienteRepository.countAllClient(),
    ]);
    if (!clientes || clientes.length === 0)
      throw new AppError("No hay clientes registrados", 404);
    const lastPage = Math.ceil(total / limit);
    // Guarda el resultado en cache
    const result = { clientes, total, lastPage };
    await this.clienteCache.setClienteListCache(limit, page, version, result);
    return result;
  }
}
