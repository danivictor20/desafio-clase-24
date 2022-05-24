"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("../services/faker"));
class ViewsController {
    constructor() {
        ViewsController.listProd = (0, faker_1.default)();
    }
    productsView(req, res) {
        const log = req.params.log;
        const nombre = req.params.nombre;
        res.render('index', {
            data: log == 'logout' ? 'logout' : 'null',
            nombre: log == 'logout' ? nombre : req.session.nombreUsuario,
            listproducts: ViewsController.listProd
        });
    }
}
ViewsController.listProd = [];
exports.default = new ViewsController();
