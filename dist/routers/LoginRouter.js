"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRouter_1 = __importDefault(require("./ApplicationRouter"));
const LoginRequesterDS_1 = __importDefault(require("../business/models/login/LoginRequesterDS"));
const CookiesGenerator_1 = __importDefault(require("../business/models/login/CookiesGenerator"));
class LoginRouter extends ApplicationRouter_1.default {
    constructor(loginRequester) {
        super();
        this.loginRequester = loginRequester;
    }
    initRoutes() {
        this.getRouter().post('/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const googleJWT = req.body.googleJWT;
            const email = req.body.email;
            const password = req.body.password;
            const loginRequester = new LoginRequesterDS_1.default(googleJWT, email, password);
            const userVM = yield this.loginRequester.login(loginRequester);
            if (!userVM) {
                res.status(400).send();
                return;
            }
            const cookieGenerator = new CookiesGenerator_1.default(userVM.getUserId(), userVM.getRole());
            res.setHeader('Set-Cookie', [cookieGenerator.getSignatureCookie(), cookieGenerator.getPayloadCookie()]);
            res.status(200).send();
        }));
        this.getRouter().post('/logout', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const cookieGenerator = new CookiesGenerator_1.default();
            res.setHeader('Set-Cookie', [cookieGenerator.getSignatureCookie(), cookieGenerator.getPayloadCookie()]);
            res.status(200).send();
        }));
    }
}
exports.default = LoginRouter;
//# sourceMappingURL=LoginRouter.js.map