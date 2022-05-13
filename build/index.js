"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./src/app");
const PORT = process.env.PORT;
app_1.app
    .listen(PORT, () => console.log(`http://localhost:${PORT}`))
    .on('error', err => console.log(err));
