import { getAuth } from "@clerk/express";
import { NextFunction, Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export class JwtAuth {
  public async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, sessionId } = getAuth(req);
      const token = userId || sessionId;
      if (!token) {
        return res.status(401).json({ error: "Not signed in" });
      }

      if (!sessionId) {
        return res.status(401).json({ error: "Invalid or expired token" });
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}
