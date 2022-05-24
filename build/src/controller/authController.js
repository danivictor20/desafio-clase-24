"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    login(req, res) {
        const { nombre } = req.body;
        req.session.nombreUsuario = nombre;
        res.redirect('/products');
    }
    logout(req, res) {
        const nombre = req.session.nombreUsuario;
        req.session.destroy(function (err) {
            res.redirect('/products/logout/' + nombre);
        });
    }
    admin(req, res) {
        res.send('Solo para administradores logueados');
    }
}
exports.default = new AuthController();
