// src/prisma/context.ts
import { AsyncLocalStorage } from "node:async_hooks";

interface RequestContext {
  empresaId: string;
}

export const prismaContext = new AsyncLocalStorage<RequestContext>();

export function withRequestId(
  requestId: string,
  callback: () => void | Promise<void>
): void {
  console.log("withRequestId", requestId);
  const context: RequestContext = { empresaId: requestId };
  prismaContext.run(context, callback);
}
