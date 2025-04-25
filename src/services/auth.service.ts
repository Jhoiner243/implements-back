import bcrypt from "bcryptjs";
import { inject, injectable } from "inversify";
import jwt from 'jsonwebtoken';
import {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  TOKEN_SECRET,
  VERIFICATION_TOKEN_SECRET
} from "../config/auth.config";
import { AuthRepository } from "../repositories/auth.repository";
import { LoginDTO } from "../ts/dtos/LoginDTO";
import { RegisterDTO } from "../ts/dtos/RegisterDTO";
import { IJwtPayload } from "../ts/types/IJwtPayload";
import { Token } from "../ts/types/Token";
import { TokenInfo } from "../ts/types/TokenInfo";
import { schemaLogin } from "../ts/validations/login.validations";
import { schemaRegister } from "../ts/validations/register.validations";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class AuthService {
  constructor(@inject(AuthRepository) private authRepository: AuthRepository) {}

  async registerUser(data: RegisterDTO): Promise<{ message: string, token: string | undefined }> {
    const userValidate = schemaRegister.parse(data);

    const { message } = await this.authRepository.authenticateUser(userValidate.user_email);

    if (message === true) throw new AppError('User already exists', 400);

    const hashedPassword = await bcrypt.hash(userValidate.user_password, 10);

    const user = await this.authRepository.registerUser({
      ...userValidate,
      user_password: hashedPassword,
    });

    const token = await this.generateAccessToken("access_token", {
      user_id: user.userId,
      user_name: userValidate.user_name,
    });

    if (!user) throw new AppError("Error creating user", 500);
    if (!token) throw new AppError("Error creating token", 500);

    return { message: "User created", token };
  }

  async loginUser(data: LoginDTO): Promise<{message: string, accessToken: string, refreshToken: string}> {
    const userValidate = schemaLogin.parse(data);

    const userCompare = await this.authRepository.findByEmail(userValidate.user_email);

    if (!userCompare) throw new AppError('The email user not exists', 400);

    const isPasswordValid = await bcrypt.compare(userValidate.user_password, userCompare.password);

    if (!isPasswordValid) {
			throw new AppError("Invalid credentials", 401);
		}

    const tokeInfo = {
      user_id: userCompare.id,
      user_name: userCompare.name,
    }

    const accessToken = await this.generateAccessToken("access_token", tokeInfo);
    const refreshToken = await this.generateAccessToken("refresh_token", tokeInfo);

   await this.authRepository.loginUser({
      ...userValidate,
      user_password: userCompare.password,
    });

    if(accessToken === undefined || refreshToken === undefined) throw new AppError("Error creating token", 500);

      return { message: "User logged in", accessToken, refreshToken };

  }

  async logoutUser(refresh_token: string): Promise<{ message: string }> {
    if(!refresh_token) throw new AppError("No active session", 403);

    return {message: "User logout"};
  }

  private async generateAccessToken(type: Token, tokenInf: TokenInfo) {
    const {user_id, user_name}= tokenInf
    if (type === 'access_token') {
      return jwt.sign({user_id, user_name}, ACCESS_TOKEN_SECRET as string, { expiresIn: "1d" });
    }

    if (type === 'refresh_token') {
      return jwt.sign({user_id, user_name}, REFRESH_TOKEN_SECRET as string, { expiresIn: "30d" });
    }

    if (type === 'verification_token') {
      return jwt.sign({user_id, user_name}, ACCESS_TOKEN_SECRET as string, { expiresIn: "1d" });
    }

    if (type === 'reset_password_token') {
      return jwt.sign({user_id, user_name}, ACCESS_TOKEN_SECRET as string, { expiresIn: "1d" });
    }
  }

  async refreshToken(refreshToken: string): Promise<{ accessToken: string }> {
    if (!refreshToken) throw new AppError("Forbidden", 403);

    const decoded = this.verifyToken("refresh_token", refreshToken);
    if (!decoded) throw new AppError("Forbidden", 403);

    const tokenInfo = {
      user_id: decoded.user_id,
      user_name: decoded.user_name,
    };

    const accessToken = await this.generateAccessToken("access_token", tokenInfo);
    return { accessToken: accessToken as string };
  }

  public verifyToken(type: Token, token: string): IJwtPayload | null {
    try {
      switch (type) {
        case "access_token":
          return jwt.verify(token, ACCESS_TOKEN_SECRET as string) as IJwtPayload;
        case "refresh_token":
          return jwt.verify(token, REFRESH_TOKEN_SECRET as string) as IJwtPayload;
        case "verification_token":
          return jwt.verify(token, VERIFICATION_TOKEN_SECRET as string) as IJwtPayload;
        default:
          return jwt.verify(token, TOKEN_SECRET as string) as IJwtPayload;
      }
    } catch {
      return null;
    }
  }
}
