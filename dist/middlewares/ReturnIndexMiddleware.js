"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationMiddleware_1 = __importDefault(require("./ApplicationMiddleware"));
const path_1 = __importDefault(require("path"));
class ReturnIndexMiddleware extends ApplicationMiddleware_1.default {
    constructor() {
        super();
    }
    defineMiddlewareFunction() {
        return (req, res, next) => {
            if ( /*req.headers.accept?.includes('text/html') && */!req.path.includes('/api/')) {
                const publicDirectoryPath = path_1.default.join(__dirname, `../../public/vueapp`);
                res.sendFile(publicDirectoryPath + '/index.html');
            }
            else {
                next();
            }
        };
    }
}
exports.default = ReturnIndexMiddleware;
//# sourceMappingURL=ReturnIndexMiddleware.js.map