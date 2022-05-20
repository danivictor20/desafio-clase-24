"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
const validarSesion = (req, res, next) => {
    if (req.session.nombreUsuario) {
        res.redirect('/products');
    }
    else {
        res.redirect('/api/auth/login');
    }
};
routes.get('/login', (req, res) => {
    res.render('login');
});
routes.get('/products', (req, res) => {
    res.render('index', { nombre: req.session.nombreUsuario });
});
exports.default = routes;
