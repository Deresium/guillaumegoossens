"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_1 = __importDefault(require("cookie"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class CookiesGenerator {
    constructor(userId, userRole) {
        if (userId && userRole) {
            this.userId = userId;
            this.userRole = userRole;
            this.generateAuthenticationCookies();
        }
        else {
            this.deleteAuthenticationCookies();
        }
    }
    getSignatureCookie() {
        return this.signatureCookie;
    }
    getPayloadCookie() {
        return this.payloadCookie;
    }
    generateSignatureCookie(value, deleteCookie = false) {
        return cookie_1.default.serialize('signature', value, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: deleteCookie ? 0 : 60 * 60 * 24,
            sameSite: true,
            path: '/'
        });
    }
    generatePayloadCookie(value, deleteCookie = false) {
        return cookie_1.default.serialize('payload', value, {
            secure: process.env.NODE_ENV === 'production',
            maxAge: deleteCookie ? 0 : 60 * 60 * 24,
            sameSite: true,
            path: '/'
        });
    }
    generateAuthenticationCookies() {
        const token = jsonwebtoken_1.default.sign({ userId: this.userId, role: this.userRole }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 }).split('.');
        const signatureCookieValue = token[2];
        const payloadCookieValue = `${token[0]}.${token[1]}`;
        this.signatureCookie = this.generateSignatureCookie(signatureCookieValue);
        this.payloadCookie = this.generatePayloadCookie(payloadCookieValue);
    }
    deleteAuthenticationCookies() {
        this.signatureCookie = this.generateSignatureCookie('', true);
        this.payloadCookie = this.generatePayloadCookie('', true);
    }
}
exports.default = CookiesGenerator;
//# sourceMappingURL=CookiesGenerator.js.map