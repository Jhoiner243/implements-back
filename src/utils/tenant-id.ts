// src/core/BaseRepository.ts

import { injectable } from "inversify";
import { prismaContext } from "../frameworks/db/middleware";

@injectable()
export class BaseRepository {
  getEmpresaId(): string {
    const store = prismaContext.getStore();
    if (!store?.empresaId) {
      throw new Error("No se encontró el ID de la empresa");
    }
    return store.empresaId;
  }
}
