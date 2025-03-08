"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appContainer = void 0;
var inversify_1 = require("inversify");
var app_binding_1 = require("./bindings/app.binding");
var setup_binding_1 = require("./bindings/setup.binding");
exports.appContainer = new inversify_1.Container();
exports.appContainer.load(setup_binding_1.setupBinding, app_binding_1.appBinding);
