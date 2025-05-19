import { injectable } from "inversify";
import { ClienteEntity } from "../entities/clientes.entity";
import { db } from "../frameworks/db/db";
import { IClientes } from "../ts/interfaces/clientes.interface";

@injectable()
export class ClientesRepository implements IClientes {
  async addClient(
    data: Omit<ClienteEntity, "id">
  ): Promise<{ message: string }> {
    const clienteCreate = await db.clientes.create({
      data: {
        name: data.name,
        email: data.email,
        address: data.address,
        phone: data.phone,
      },
    });

    if (!clienteCreate) return { message: "Cliente no agregado" };

    return { message: "Cliente agregado exitosamente" };
  }

  async getClientByID(id_cliente: string) {
    const client = await db.clientes.delete({
      where: { id: id_cliente },
    });

    if (!client) return null;

    return client;
  }

  async getAllClient(): Promise<ClienteEntity[]> {
    const clientes = await db.clientes.findMany({
      cacheStrategy: {
        ttl: 60,
      },
    });
    return clientes;
  }

  async deleteClient(id_cliente: string) {
    await db.clientes.delete({
      where: { id: id_cliente },
    });
  }
}
