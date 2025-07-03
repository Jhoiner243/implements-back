import { PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/errors/app-errors";
import { prismaContext } from "./middleware";

const modelsWithoutTenant = new Set(["Empresa", "User", "ProfitSummary"]);

function requiresTenant(model: string | undefined): boolean {
  return model ? !modelsWithoutTenant.has(model) : false;
}

const prismaClientSingleton = () => {
  const client = new PrismaClient();

  return client.$extends({
    query: {
      async $allOperations({ model, args, query }) {
        const empresaId = prismaContext.getStore();
        const requiereEmpresa = requiresTenant(model);
        if (requiereEmpresa && !empresaId) {
          throw new AppError("No existe el id de la entidad", 404);
        }

        if (requiereEmpresa) {
          const [, result] = await client.$transaction([
            client.$executeRawUnsafe(`SET app.empresa_id = '${empresaId}'`),
            query(args),
          ]);
          return result;
        } else {
          await client.$executeRawUnsafe(`RESET app.empresa_id`);
          return query(args);
        }
      },
    },
  });
};

declare const globalThis: {
  prismaGlobal: PrismaClient;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}

export const db = prisma;
