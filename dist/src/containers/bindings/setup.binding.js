"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupBinding = exports.TYPES = void 0;
var inversify_1 = require("inversify");
var middlewares_setup_1 = require("../../frameworks/setups/middlewares.setup");
var routes_setup_1 = require("../../frameworks/setups/routes.setup");
var server_setup_1 = require("../../frameworks/setups/server.setup");
exports.TYPES = {
    Routes: Symbol.for("Routes"),
    App: Symbol.for("App")
};
exports.setupBinding = new inversify_1.ContainerModule(function (bind) {
    bind(middlewares_setup_1.MiddlewaresSetup).toSelf();
    bind(routes_setup_1.RoutesSetup).toSelf();
    bind(server_setup_1.ServerSetup).toSelf();
});
