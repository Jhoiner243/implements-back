import { injectable } from "inversify";
import { db } from "../frameworks/db/db";
import { RegisterEntidad } from "../ts/dtos/registerEntidadDto";

@injectable()
export class EntidadesRepository {
  async createEntidad({ data }: { data: RegisterEntidad }) {
    const entidadId = await db.empresa.create({
      data: data,
    });

    return entidadId.id;
  }

  async verificationEntidadById({ idEntidad }: { idEntidad: string }) {
    return await db.empresa.findFirst({
      where: {
        id: idEntidad,
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
}
