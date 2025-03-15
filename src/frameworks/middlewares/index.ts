import cookieParser from "cookie-parser";
import express, { Express } from "express";
import { injectable } from "inversify";
import morgan from "morgan";

import compression from "compression";
import { CorsOptions } from "cors";
     const CorsOptions: CorsOptions = {
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    }
@injectable()
export class Middlewares {
  constructor() {}
    init(app: Express): void {
      app.use(compression());
      app.use(morgan("tiny"));
      app.use(express.urlencoded({ extended: true }));
      app.use(express.json());
      app.use(cookieParser());
  }
}