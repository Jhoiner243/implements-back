/* eslint-disable @typescript-eslint/no-explicit-any */
import ClerkClient from "@clerk/backend";
import { inject, injectable } from "inversify";
import jwt from "jsonwebtoken";
import {
  CLERK_PUBLIC_KEY,
  CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY,
} from "../config/auth.config";
import { AuthRepository } from "../repositories/auth.repository";
import { RegisterDTO } from "../ts/dtos/RegisterDTO";
import { IJwtPayload } from "../ts/types/IJwtPayload";
import { Token } from "../ts/types/Token";
import { TokenInfo } from "../ts/types/TokenInfo";
import { AppError } from "../utils/errors/app-errors";

@injectable()
export class AuthService {
  constructor(@inject(AuthRepository) private authRepository: AuthRepository) {}

  private async clientClerk(userId: string) {
    // Obtener el usuario desde Clerk
    const clerkClient = ClerkClient.createClerkClient({
      secretKey: CLERK_SECRET_KEY,
      publishableKey: CLERK_PUBLISHABLE_KEY,
    });

    return clerkClient.users.getUser(userId);
  }

  async registerUser({ data }: { data: RegisterDTO }) {
    // Verificar si el usuario ya está en la base de datos
    const { message } = await this.authRepository.authenticateUser(
      data.user_clerkId
    );
    if (message === true) throw new AppError("User already exists", 400);

    // Registrar el usuario en tu base de datos
    const user = await this.authRepository.registerUser({
      user_clerkId: data.user_clerkId,
      user_email: data.user_email,
      user_name: data.user_name,
      user_lastname: data.user_lastname,
    });
    if (!user) throw new AppError("Error creating user", 500);
  }

  private async generateAccessToken(type: Token, tokenInf: TokenInfo) {
    const { user_id, user_name } = tokenInf;
    if (type === "access_token") {
      return jwt.sign({ user_id, user_name }, CLERK_SECRET_KEY as string, {
        expiresIn: "1d",
      });
    }

    if (type === "refresh_token") {
      return jwt.sign({ user_id, user_name }, CLERK_SECRET_KEY as string, {
        expiresIn: "30d",
      });
    }

    if (type === "verification_token") {
      return jwt.sign({ user_id, user_name }, CLERK_SECRET_KEY as string, {
        expiresIn: "1d",
      });
    }

    if (type === "reset_password_token") {
      return jwt.sign({ user_id, user_name }, CLERK_SECRET_KEY as string, {
        expiresIn: "1d",
      });
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

    const accessToken = await this.generateAccessToken(
      "access_token",
      tokenInfo
    );
    return { accessToken: accessToken as string };
  }

  public verifyToken(type: Token, token: string): IJwtPayload | null {
    const options = { algorithms: ["RS256" as jwt.Algorithm] };
    try {
      switch (type) {
        case "access_token":
          return jwt.verify(token, CLERK_PUBLIC_KEY as string) as any;
        case "refresh_token":
          return jwt.verify(
            token,
            CLERK_PUBLIC_KEY as string,
            options
          ) as IJwtPayload;
        case "verification_token":
          return jwt.verify(token, CLERK_PUBLIC_KEY as string) as IJwtPayload;
        default:
          return jwt.verify(token, CLERK_PUBLIC_KEY as string) as IJwtPayload;
      }
    } catch {
      return null;
    }
  }

  async deleteAccount(userId: string) {
    await this.authRepository.deleteAccount(userId);
  }
}
