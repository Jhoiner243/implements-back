"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const app_1 = require("./app/app");
const app_container_1 = require("./containers/app.container");
const app = app_container_1.appContainer.get(app_1.App);
app.start();
(0, routing_controllers_1.useContainer)(app_container_1.appContainer);
