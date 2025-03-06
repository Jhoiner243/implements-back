"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appBinding = void 0;
var inversify_1 = require("inversify");
var app_1 = require("../../app/app");
exports.appBinding = new inversify_1.ContainerModule(function (bind) {
    bind.bind(app_1.App).toSelf();
});
