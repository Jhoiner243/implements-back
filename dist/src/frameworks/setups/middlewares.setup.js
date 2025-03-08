"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddlewaresSetup = void 0;
var inversify_1 = require("inversify");
var middlewares_1 = require("../middlewares");
var MiddlewaresSetup = /** @class */ (function () {
    function MiddlewaresSetup(middlewares) {
        this.middlewares = middlewares;
    }
    MiddlewaresSetup.prototype.init = function (app) {
        this.middlewares.init(app);
    };
    MiddlewaresSetup = __decorate([
        (0, inversify_1.injectable)(),
        __metadata("design:paramtypes", [middlewares_1.Middlewares])
    ], MiddlewaresSetup);
    return MiddlewaresSetup;
}());
exports.MiddlewaresSetup = MiddlewaresSetup;
