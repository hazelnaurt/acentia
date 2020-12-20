"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '127.0.0.1';
const server = http_1.default.createServer(app_1.default);
server.listen(PORT, HOST);
