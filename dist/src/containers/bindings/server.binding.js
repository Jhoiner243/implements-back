"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverBinding = void 0;
var inversify_1 = require("inversify");
var server_setup_1 = require("../../frameworks/setups/server.setup");
exports.serverBinding = new inversify_1.ContainerModule(function (bind) {
    bind.bind(server_setup_1.ServerSetup).toSelf();
});
