"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./src/app"));
app_1.default.set('views', __dirname + '/public/views');
app_1.default.set('view engine', 'ejs');
const PORT = process.env.PORT;
app_1.default
    .listen(PORT, () => console.log(`http://localhost:${PORT}`))
    .on('error', err => console.log(err));
