import { Request, Response } from "express";
import { inject } from "inversify";
import {
  Delete,
  Get,
  JsonController,
  Post,
  Req,
  Res,
} from "routing-controllers";
import { AuthFactusApi } from "../frameworks/factus-dian/auth";
import { AuthService } from "../services/auth.service";
import { AppError } from "../utils/errors/app-errors";

@JsonController()
export class AuthController {
  constructor(
    @inject(AuthFactusApi) private factusAuth: AuthFactusApi,
    @inject(AuthService) private authService: AuthService
  ) {}

  //Obtenemos los datos del usuario cuando se registre o inicie sesion por primera vez
  @Post("/register")
  async registerUser(@Req() req: Request, @Res() res: Response) {
    try {
      const event = req.body;
      const {
        data: { first_name, last_name, id, email_addresses },
      } = event;

      if (event === null) return;
      if (event.type === "user.created") {
        await this.authService.registerUser({
          data: {
            user_clerkId: id,
            user_email: email_addresses[0].email_address,
            user_lastname: last_name,
            user_name: first_name,
          },
        });
      }
    } catch (error) {
      console.error("Error en registerUser:", error);

      if (error instanceof AppError) {
        return res.status(error.status).json({ message: error.message });
      }
      return res.status(500).json({ message: "Error de servidor interno" });
    }
  }

  // Cuando un usuario elimine su cuenta debe tener se obtiene el userId para eliminarlo de nuestra base de datos
  @Delete("/delete-account")
  async deleteAccount(@Req() req: Request) {
    const {
      data: { id },
    } = req.body;

    if (!id) return;

    await this.authService.deleteAccount(id);
  }

  @Get("/credentials")
  async credentialAccess() {
    const { access_token, refresh_token } = await this.factusAuth.auth();
    return {
      access_token_factus: access_token,
      refresh_token_factus: refresh_token,
    };
  }
}
