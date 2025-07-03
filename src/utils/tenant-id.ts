// src/core/BaseRepository.ts

import { prismaContext } from "../frameworks/db/middleware";

export class BaseRepository {
  protected getEmpresaId(): string {
    const store = prismaContext.getStore();
    if (!store?.empresaId) {
      throw new Error("No se encontró el ID de la empresa");
    }
    return store.empresaId;
  }
}
