"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLogued = void 0;
const isLogued = (req, res, next) => {
    if (!req.session.nombreUsuario) {
        res.redirect('/login');
    }
    next();
};
exports.isLogued = isLogued;
