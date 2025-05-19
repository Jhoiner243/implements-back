import dotenv from "dotenv";
dotenv.config();

export const {
  SMTP_HOST = "smtp.gmail.com",
  SMTP_PORT = 465,
  SECURE = true,
  SMTP_AUTH_USER = "Jhoinermartinez243@gmail.com",
  SMTP_AUTH_PASS = "avwl swrh taln ivtw",
} = process.env;

console.log(SMTP_HOST, SMTP_PORT, SECURE, SMTP_AUTH_USER, SMTP_AUTH_PASS);
