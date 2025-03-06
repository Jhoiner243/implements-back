"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var app_1 = require("./src/app/app");
var configs_1 = require("./src/config/configs");
var app_container_1 = require("./src/containers/app.container");
console.log(configs_1.PORT);
var app = app_container_1.appContainer.get(app_1.App);
app.start();
