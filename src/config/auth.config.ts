import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

export const CLERK_PUBLIC_KEY = fs.readFileSync("keys-clerk.json", "utf8");

export const {
  CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  VERIFICATION_TOKEN_SECRET,
  RESET_PASSWORD_TOKEN_SECRET,
  TOKEN_SECRET,
} = process.env;
