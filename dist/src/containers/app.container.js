"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = void 0;
var inversify_1 = require("inversify");
var app_binding_1 = require("./bindings/app.binding");
var server_binding_1 = require("./bindings/server.binding");
exports.appContainer = new inversify_1.Container();
exports.appContainer.load(app_binding_1.appBinding, server_binding_1.serverBinding);
