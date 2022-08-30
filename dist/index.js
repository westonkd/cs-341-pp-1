"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const application_config_1 = __importDefault(require("./config/application.config"));
const db_init_1 = __importDefault(require("./config/initializers/db.init"));
const routes_1 = __importDefault(require("./config/routes"));
const app = (0, express_1.default)();
// global middleware
app.use((0, cors_1.default)());
(0, routes_1.default)(app);
db_init_1.default.initialize().then(() => {
    app.listen(application_config_1.default.port, () => { });
});
