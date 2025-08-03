// src/prisma/context.ts
import { AsyncLocalStorage } from "node:async_hooks";

interface RequestContext {
  empresaId: string;
}

export const prismaContext = new AsyncLocalStorage<RequestContext>();

/**
 * Ejecuta un callback (sincrono o async) en el contexto del tenant,
 * y devuelve lo que el callback retorne (o su Promise).
 */
export async function withRequestContext<T>(
  empresaId: string,
  callback: () => T | Promise<T>
): Promise<T> {
  if (!empresaId) {
    throw new Error("No se proporcionó empresaId para el contexto");
  }
  // run puede devolver T o Promise<T>, así que hacemos await para unificar
  return prismaContext.run({ empresaId }, callback);
}
