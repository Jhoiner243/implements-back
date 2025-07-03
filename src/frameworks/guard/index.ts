import type { NextFunction, Request, Response } from "express";
import { Middleware } from "routing-controllers";
import { appContainer } from "../../containers/app.container";
import { isProtectedRoutes } from "../../utils/isProtectedRoutes";
import { JwtAuth } from "../jwt";

declare module "express" {
  interface Request {
    parsedSubdomain?: string | null;
  }
}

@Middleware({ type: "before" })
export class AuthGuard {
  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    const isProtected = isProtectedRoutes(req.path);
    if (!isProtected) {
      return next();
    }

    const jwtAuth: JwtAuth = appContainer.get(JwtAuth);

    await jwtAuth.authenticate(req, res, next);
  }
}
