import type { NextFunction, Request, Response } from "express";
import { Middleware } from "routing-controllers";
import { appContainer } from "../../containers/app.container";
import { HasPermission } from "../get-auth";

@Middleware({ type: "before" })
export class AuthGuardVerification {
  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    const hasPermission = appContainer.get(HasPermission);

    try {
      await hasPermission.use(req, res, next);
    } catch (error) {
      next(error);
    }
  }
}
