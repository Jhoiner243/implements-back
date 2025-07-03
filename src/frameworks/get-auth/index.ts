import { getAuth } from "@clerk/express";
import { NextFunction, Request, Response } from "express";
import { injectable } from "inversify";
import { withRequestId } from "../db/middleware";

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
        if (req.body.data.id) {
          next();
          return;
        }
        console.log("Falta userId o sessionId");
        return res.status(403).json("Forbidden");
      }

      // Permitir si no hay organización (usuarios sin org)
      if (!orgId) {
        return next();
      }

      // Permitir si es evento de eliminación webhook de Clerk
      if (req.body?.object && req.body?.data?.deleted === true) {
        console.log("Evento de eliminación de Clerk");
        return next();
      }

      // Verificar rol en la organización
      const hasPerm = has?.({ role: "org:admin" });

      if (!hasPerm) {
        console.log("No tiene permisos suficientes");
        return res.status(403).json("Forbidden");
      }

      console.log("Autorizado. ORGID:", orgId);
      // Inyectar orgId en contexto y continuar
      withRequestId(orgId, next);
    } catch (error) {
      console.error("Error en HasPermission middleware:", error);
      return next(error);
    }
  }
}
