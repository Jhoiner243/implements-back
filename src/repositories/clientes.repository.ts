import { injectable } from "inversify";
import { clientCreate, ClienteEntity } from "../entities/clientes.entity";
import { db } from "../frameworks/db/db";
import { prismaContext } from "../frameworks/db/middleware";
import { IClientes } from "../ts/interfaces/clientes.interface";

@injectable()
export class ClientesRepository implements IClientes {
  async addClient(
    data: Omit<ClienteEntity, "id">
  ): Promise<{ message: string }> {
    const { empresaId } = prismaContext.getStore() ?? { empresaId: null };
    if (!empresaId) {
      throw new Error("No se pudo determinar la empresa para la factura");
    }
    const clienteCreate = await db.clientes.create({
      data: {
        empresa: {
          connect: {
            id: empresaId,
          },
        },
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
    return db.clientes.update({
      where: { id },
      data: data,
    });
  }
  async getClientByID(id_cliente: string) {
    return await db.clientes.findUnique({
      where: { id: id_cliente },
    });
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
