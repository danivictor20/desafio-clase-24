"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
const authController_1 = __importDefault(require("../controller/authController"));
const isLogued_1 = require("../middlewares/isLogued");
routes.post('/login', authController_1.default.login);
routes.get('/logout', authController_1.default.logout);
/**
 * Ejemplo de como proteger una ruta con un Middleware
 */
routes.get('/admin', isLogued_1.isLogued, authController_1.default.admin);
exports.default = routes;
