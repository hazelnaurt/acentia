"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
app.set('x-powered-by', false);
app.use(express_1.default.json());
////////////////////////////////////
/// Static files & Logs
if (process.env.MODE == 'PRO') {
    app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    const accessLogStream = fs_1.default.createWriteStream(path_1.default.join(__dirname, 'accessLog'), { flags: 'a' });
    app.use(morgan_1.default('combined', { stream: accessLogStream }));
}
else if (process.env.MODE == 'DEV') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '..', 'public')));
    app.use(morgan_1.default('dev'));
}
////////////////////////////////////
/// Routes
app.use((req, res, next) => {
    res.status(404).send('<h1>Oops!! Resource not found</h1>');
});
app.use((error, req, res, next) => {
    res.status(500).send('<h1>Server Error: We working on it</h1>');
});
exports.default = app;
