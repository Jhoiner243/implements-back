import dotenv from "dotenv";
dotenv.config();

export const {
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  VERIFICATION_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_SECRET,
  TOKEN_SECRET,
} = process.env;