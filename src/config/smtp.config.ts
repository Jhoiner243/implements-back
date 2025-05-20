import dotenv from "dotenv";
dotenv.config();

export const { SMTP_HOST, SMTP_PORT, SECURE, SMTP_AUTH_USER, SMTP_AUTH_PASS } =
  process.env;
