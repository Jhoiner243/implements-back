import express, { Express } from "express";
import { injectable } from "inversify";

@injectable()
export class Middlewares {
    init(app: Express): void {
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

  }
}