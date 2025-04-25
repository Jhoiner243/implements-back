import { JwtPayload } from "jsonwebtoken";

export interface IJwtPayload extends JwtPayload {
  user_id: string;
  user_name: string;
}