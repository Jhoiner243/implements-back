import dotenv from "dotenv";

dotenv.config();

export const {
  CLERK_PUBLIC_KEY,
  CLERK_SECRET_KEY,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  VERIFICATION_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_SECRET,
  TOKEN_SECRET,
} = process.env;
