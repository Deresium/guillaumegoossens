"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ApplicationRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.initRoutes();
    }
    getRouter() {
        return this.router;
    }
}
exports.default = ApplicationRouter;
//# sourceMappingURL=ApplicationRouter.js.map