import { injectable } from "inversify";
import { clientCreate, ClienteEntity } from "../entities/clientes.entity";
import { db } from "../frameworks/db/db";
import { IClientes } from "../ts/interfaces/clientes.interface";
import { BaseRepository } from "../utils/tenant-id";

@injectable()
export class ClientesRepository extends BaseRepository implements IClientes {
  async addClient(
    data: Omit<ClienteEntity, "id">
  ): Promise<{ message: string }> {
    const empresaId = this.getEmpresaId();

    const clienteCreate = await db.clientes.create({
      data: {
        empresa_id: empresaId,
        name: data.name,
        email: data.email,
        address: data.address,
        phone: data.phone,
      },
    });

    if (!clienteCreate) return { message: "Cliente no agregado" };

    return { message: "Cliente agregado exitosamente" };
  }
  async updateClient(id: string, data: Partial<clientCreate>) {
    const empresaId = this.getEmpresaId();
    return db.clientes.update({
      where: { id, empresa_id: empresaId },
      data: data,
    });
  }
  async getClientByID(id_cliente: string) {
    const empresaId = this.getEmpresaId();
    return await db.clientes.findUnique({
      where: { id: id_cliente, empresa_id: empresaId },
    });
  }

  async getAllClient(limit = 10, page = 1): Promise<ClienteEntity[]> {
    const empresaId = this.getEmpresaId();
    const skip = (page - 1) * limit;
    const clientes = await db.clientes.findMany({
      where: {
        empresa_id: empresaId,
      },
      skip,
      take: limit,
    });
    return clientes;
  }

  async countAllClient(): Promise<number> {
    const empresaId = this.getEmpresaId();
    return db.clientes.count({ where: { empresa_id: empresaId } });
  }

  async deleteClient(id_cliente: string) {
    const empresaId = this.getEmpresaId();
    await db.clientes.delete({
      where: { id: id_cliente, empresa_id: empresaId },
    });
  }
}
