import nodemailer from "nodemailer";
import {
  SECURE,
  SMTP_AUTH_PASS,
  SMTP_AUTH_USER,
  SMTP_HOST,
  SMTP_PORT,
} from "../config/smtp.config";

const smtp = {
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SECURE === "true",
  auth: {
    user: SMTP_AUTH_USER,
    pass: SMTP_AUTH_PASS,
  },
};

export const transporter = nodemailer.createTransport(smtp);
