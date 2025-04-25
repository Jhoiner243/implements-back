import { Request, Response } from "express";
import { inject } from "inversify";
import { Body, JsonController, Post, Req, Res } from "routing-controllers";
import { cookieOptions } from "../constants/cookieOptions.constants";
import { AuthService } from "../services/auth.service";
import { LoginDTO } from "../ts/dtos/LoginDTO";
import { RegisterDTO } from "../ts/dtos/RegisterDTO";
import { AppError } from "../utils/errors/app-errors";

@JsonController()
export class AuthController{
  constructor(@inject(AuthService) private authService: AuthService) {}

  @Post("/register")
  async registerUser(@Res() res: Response,@Body() data: RegisterDTO) {
    try {
      const { message, token } = await this.authService.registerUser(data);

      res.cookie("jwt", token)
      return res.status(200).json({message})
    } catch(error){
      console.error("Error en registerUser:", error);

      if(error instanceof AppError){
        return res.status(error.status).json({message: error.message});
      }
      return res.status(500).json({message: "Error de servidor interno"});
    }
    
  }

  @Post("/login")
  async loginUser(@Res() res: Response ,@Body() data: LoginDTO) {
    try {
      const { message, accessToken, refreshToken } = await this.authService.loginUser(data);

      // Guardamos el token en una cookie
      res.cookie("jwt", refreshToken, cookieOptions)
      // retornamos la respuesta directamente
      return res.status(200).json({
        message, accessToken})
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError("Error de servidor interno", 500);
    }
  }

  @Post("/logout")
  async logoutUser(@Res() res: Response, @Req() req: Request) {
    try {
      const token = req.cookies.jwt
      const { message } = await this.authService.logoutUser(token);

      res.clearCookie("jwt", cookieOptions)

      // retornamos la respuesta directamente
      return {
        message,
      };
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError("Error de servidor interno", 500);
    }
  }
}
