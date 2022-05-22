"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
const faker_1 = __importDefault(require("../services/faker"));
const listProd = (0, faker_1.default)();
routes.get('/products/:log?/:nombre?', (req, res) => {
    const log = req.params.log;
    const nombre = req.params.nombre;
    res.render('index', {
        data: log == 'logout' ? 'logout' : 'null',
        nombre: log == 'logout' ? nombre : req.session.nombreUsuario,
        listproducts: listProd
    });
});
exports.default = routes;
