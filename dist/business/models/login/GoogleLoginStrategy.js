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
Object.defineProperty(exports, "__esModule", { value: true });
const google_auth_library_1 = require("google-auth-library");
class GoogleLoginStrategy {
    constructor(loginRequester, userDataGateway) {
        this.loginRequest = loginRequester;
        this.userDataGateway = userDataGateway;
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_ID_AUTH, process.env.GOOGLE_SECRET_AUTH);
            const ticket = yield client.verifyIdToken({
                idToken: this.loginRequest.getGoogleJWT(),
                audience: process.env.GOOGLE_ID_AUTH
            });
            const payload = ticket.getPayload();
            if (!payload || payload.iss !== 'https://accounts.google.com' || !payload.email_verified) {
                return null;
            }
            const userid = payload.sub;
            const name = payload.name;
            const email = payload.email;
            let user = yield this.userDataGateway.getUserByGoogleId(userid);
            if (!user) {
                user = yield this.userDataGateway.createGoogleUser(name, email, userid);
            }
            return user;
        });
    }
}
exports.default = GoogleLoginStrategy;
//# sourceMappingURL=GoogleLoginStrategy.js.map