import type { NextFunction, Request, Response } from "express";
import { Middleware } from "routing-controllers";
import { appContainer } from "../../containers/app.container";
import { isProtectedRoutes } from "../../utils/isProtectedRoutes";
import { JwtAuth } from "../jwt";

@Middleware({type: "before"})
export class AuthGuard {
  use(req: Request, res: Response, next: NextFunction) {
    const isProtected = isProtectedRoutes(req.path)

    if(!isProtected) {
      return next()
    }
    const jwtAuth = appContainer.get(JwtAuth);
    jwtAuth.authenticate(req, res, next);
  }
}