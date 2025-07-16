import { injectable } from "inversify";
import { db } from "../frameworks/db/db";
import { RegisterEntidad } from "../ts/dtos/registerEntidadDto";

@injectable()
export class EntidadesRepository {
  async createEntidad({ data }: { data: RegisterEntidad }) {
    const entidadId = await db.empresa.create({
      data: data,
    });

    //Cuando se crea la entidad se actualiza la empresa para conectarala con el primer usuario que seria el creador de la empresa.
    await db.empresa.update({
      where: {
        id: entidadId.id,
      },
      data: {
        users: {
          connect: {
            clerkId: data.createBy,
          },
        },
      },
    });

    return entidadId.id;
  }

  async getAllEntidadesId() {
    return await db.empresa.findMany({
      select: {
        id: true,
      },
    });
  }

  async verficationUserById({ userId }: { userId: string }) {
    return await db.user.findUnique({
      where: {
        clerkId: userId,
      },
    });
  }

  async verificationEntidadById({ idEntidad }: { idEntidad: string }) {
    return await db.empresa.findUnique({
      where: {
        organizationId: idEntidad,
      },

      include: {
        users: true,
      },
    });
  }

  async typeMemberEntidad({ idEntidad }: { idEntidad: string }) {
    return await db.empresa.findUnique({
      select: {
        typePlan: true,
      },
      where: {
        id: idEntidad,
      },
    });
  }

  async addUserInEntidad({
    clerkId,
    idEntidad,
  }: {
    idEntidad: string;
    clerkId: string;
  }) {
    await db.empresa.update({
      data: {
        users: {
          connect: {
            clerkId: clerkId,
          },
        },
      },
      where: {
        id: idEntidad,
      },
    });
  }

  async entidadByName(name: string) {
    return await db.empresa.findFirst({
      where: {
        nombre: name,
      },
    });
  }

  async deleteEntidad({ id }: { id: string }) {
    return await db.empresa.delete({
      where: {
        organizationId: id,
      },
    });
  }
}
