"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
const server = (0, express_1.default)();
//middlewares
server.use(express_1.default.json());
//routes
server.use(userRoutes_1.default);
server.use(appointmentRoutes_1.default);
exports.default = server;
