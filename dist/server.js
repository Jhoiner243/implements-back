"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var app_1 = require("./src/app/app");
var app_container_1 = require("./src/containers/app.container");
var app = app_container_1.appContainer.get(app_1.App);
app.start();
