"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.post('/login', (req, res) => {
    const { nombre } = req.body;
    if (req.session.nombreUsuario) {
        res.redirect('/products');
    }
    else {
        req.session.nombreUsuario = nombre;
        res.redirect('/products');
    }
});
routes.get('/logout', (req, res) => {
    req.session.destroy(function (err) {
        res.render('/logout');
    });
});
exports.default = routes;
