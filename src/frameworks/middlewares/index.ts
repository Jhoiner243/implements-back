import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import { injectable } from "inversify";
import morgan from "morgan";

import { CorsOptions } from "cors";
     const CorsOptions: CorsOptions = {
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    }
@injectable()
export class Middlewares {
  constructor() {}
    init(app: Express): void {
      app.use(compression());
      app.use(helmet());
      app.use(morgan("combined"));
      app.use(cors(CorsOptions));
      app.use(express.urlencoded({ extended: true }));
      app.use(express.json());
      app.use(cookieParser());
  }
}