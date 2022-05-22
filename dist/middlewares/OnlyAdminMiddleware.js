"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationMiddleware_1 = __importDefault(require("./ApplicationMiddleware"));
class OnlyAdminMiddleware extends ApplicationMiddleware_1.default {
    constructor() {
        super();
    }
    defineMiddlewareFunction() {
        return (req, res, next) => {
            if (req.userRole === 'ADMIN') {
                next();
                return;
            }
            res.status(400).send('Accès refusé');
        };
    }
}
exports.default = OnlyAdminMiddleware;
//# sourceMappingURL=OnlyAdminMiddleware.js.map