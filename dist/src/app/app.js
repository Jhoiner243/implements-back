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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var inversify_1 = require("inversify");
var configs_1 = require("../config/configs");
var middlewares_setup_1 = require("../frameworks/setups/middlewares.setup");
var routes_setup_1 = require("../frameworks/setups/routes.setup");
var server_setup_1 = require("../frameworks/setups/server.setup");
var App = /** @class */ (function () {
    function App(middlewaresSetup, routesSetup, serverSetup) {
        this.middlewaresSetup = middlewaresSetup;
        this.routesSetup = routesSetup;
        this.serverSetup = serverSetup;
        this.app = (0, express_1.default)();
        this.port = configs_1.PORT;
    }
    App.prototype.start = function () {
        this.middlewaresSetup.init(this.app);
        this.routesSetup.setup(this.app);
        this.serverSetup.create(this.app, this.port);
    };
    App = __decorate([
        (0, inversify_1.injectable)(),
        __param(0, (0, inversify_1.inject)(middlewares_setup_1.MiddlewaresSetup)),
        __param(1, (0, inversify_1.inject)(routes_setup_1.RoutesSetup)),
        __param(2, (0, inversify_1.inject)(server_setup_1.ServerSetup)),
        __metadata("design:paramtypes", [middlewares_setup_1.MiddlewaresSetup,
            routes_setup_1.RoutesSetup,
            server_setup_1.ServerSetup])
    ], App);
    return App;
}());
exports.App = App;
