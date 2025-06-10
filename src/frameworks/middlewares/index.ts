import compression from "compression";
import cookieParser from "cookie-parser";
import "dotenv/config";
import express, { Express } from "express";
import { injectable } from "inversify";
import morgan from "morgan";
import { limitador } from "../../utils/rateLimiter";

@injectable()
export class Middlewares {
  constructor() {}
  init(app: Express): void {
    app.use(limitador);
    app.use(compression());
    app.use(morgan("tiny"));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
  }
}
