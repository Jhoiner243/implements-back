import compression from "compression";
import cookieParser from "cookie-parser";
import express, { Express } from "express";
import { injectable } from "inversify";
import morgan from "morgan";

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
