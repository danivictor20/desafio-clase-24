"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
const viewsController_1 = __importDefault(require("../controller/viewsController"));
routes.get('/products/:log?/:nombre?', viewsController_1.default.productsView);
exports.default = routes;
