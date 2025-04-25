import dotenv from "dotenv";
dotenv.config();

export const {
  PORT,
  GOOGLE_APPLICATION_CREDENTIALS,
  COOKIE_HTTP_ONLY = true,
  COOKIE_SAME_SITE = "strict",
  COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7,
  COOKIE_SECURE = true,
} = process.env;