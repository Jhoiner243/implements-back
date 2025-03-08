"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesSetup = void 0;
var inversify_1 = require("inversify");
var routing_controllers_1 = require("routing-controllers");
var app_container_1 = require("../../containers/app.container");
var RoutesSetup = /** @class */ (function () {
    function RoutesSetup() {
    }
    RoutesSetup.prototype.setup = function (app) {
        (0, routing_controllers_1.useContainer)(app_container_1.appContainer);
    };
    RoutesSetup = __decorate([
        (0, inversify_1.injectable)()
    ], RoutesSetup);
    return RoutesSetup;
}());
exports.RoutesSetup = RoutesSetup;
