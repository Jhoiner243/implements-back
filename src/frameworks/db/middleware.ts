// src/prisma/context.ts
import { AsyncLocalStorage } from "node:async_hooks";

interface RequestContext {
  empresaId: string | null;
}

export const prismaContext = new AsyncLocalStorage<RequestContext>();
