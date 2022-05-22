"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.post('/login', (req, res) => {
    const { nombre } = req.body;
    req.session.nombreUsuario = nombre;
    res.redirect('/products');
});
routes.get('/logout', (req, res) => {
    const nombre = req.session.nombreUsuario;
    req.session.destroy(function (err) {
        res.redirect('/products/logout/' + nombre);
    });
});
exports.default = routes;
