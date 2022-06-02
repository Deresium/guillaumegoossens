"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginRequesterDS {
    constructor(googleJWT, email, password) {
        this.googleJWT = googleJWT;
        this.email = email;
        this.password = password;
    }
    getGoogleJWT() {
        return this.googleJWT;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
}
exports.default = LoginRequesterDS;
//# sourceMappingURL=LoginRequesterDS.js.map