import Cookies from "cookies";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { AuthService } from "../../services/auth.service";

@injectable()
export class JwtAuth {
  constructor(@inject(AuthService) private authService: AuthService) {}

  public async authenticate(req: Request, res: Response, next: NextFunction) {
    // Recuperar el token de sesión de la cookie `__session` para una solicitud del mismo origen
    // o del encabezado `Authorization` para solicitudes de origen cruzado
    const cookies = new Cookies(req, res);
    const tokenSameOrigin = cookies.get("__session");
    const tokenCrossOrigin = req.headers.authorization?.split(" ")[1];
    if (!tokenSameOrigin && !tokenCrossOrigin) {
      res.status(401).json({ error: "Not signed in" });
      return;
    }

    const isValid = this.authService.verifyToken(
      "access_token",
      tokenCrossOrigin ?? ""
    );

    if (!isValid) {
      res.status(401).json({ error: "Invalid or expired token" });
      return;
    }

    next();
  }
}
