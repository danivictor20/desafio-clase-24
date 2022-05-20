"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const viewsRoutes_1 = __importDefault(require("./routes/viewsRoutes"));
const app = (0, express_1.default)();
app.use((0, express_session_1.default)({
    store: connect_mongo_1.default.create({
        mongoUrl: process.env.MONGO,
        // ttl: 60
    }),
    secret: String(process.env.SECRET),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/api/auth', authRoutes_1.default);
app.use('/', viewsRoutes_1.default);
exports.default = app;
