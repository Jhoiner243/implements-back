import { LoginDTO } from "../dtos/LoginDTO";
import { RegisterDTO } from "../dtos/RegisterDTO";

export interface IAuth {
  registerUser: (user: RegisterDTO, access_token: string) => Promise<{message: string}>,
  loginUser: (user: LoginDTO) => Promise<{message: string}>
  authenticateUser: (user_email: string) => Promise<{message: boolean}>
}