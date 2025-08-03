import { getAuth } from "@clerk/express";
import { NextFunction, Request, Response } from "express";
import { injectable } from "inversify";
import { prismaContext, withRequestContext } from "../db/middleware";

@injectable()
export class HasPermission {
  public async use(req: Request, res: Response, next: NextFunction) {
    try {
      const auth = getAuth(req);

      const orgId = auth?.orgId ?? null;
      const userId = auth?.userId ?? null;
      const sessionId = auth?.sessionId ?? null;
      const has = auth?.has;

      // Validación básica de autenticación
      if (!userId || !sessionId) {
        if (req.body?.data?.id) {
          next();
          return;
        }
        return res.status(403).json("Forbidden");
      }

      // Permitir si no hay organización (usuarios sin org)
      if (!orgId && !req.body.orgId) {
        return next();
      }

      // Permitir si es evento de eliminación webhook de Clerk
      if (req.body?.object && req.body?.data?.deleted === true) {
        return next();
      }

      // Verificar rol en la organización
      const hasPerm = has?.({ role: "org:admin" });
      const hasPermMember = has?.({ role: "org:member" });

      if (!hasPerm && !hasPermMember) {
        return res.status(403).json("Forbidden");
      }

      // Inyectar orgId en contexto y continuar
      if (orgId) {
        withRequestContext(orgId, next);
      }
      if (!orgId && req.body.orgId) {
        prismaContext.run({ empresaId: req.body.orgId }, () => {
          next();
        });
      }
    } catch (error) {
      console.error("Error en HasPermission middleware:", error);
      return next(error);
    }
  }
}
