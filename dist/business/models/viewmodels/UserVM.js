"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserVM {
    constructor(userId, email, role) {
        this.userId = userId;
        this.email = email;
        this.role = role;
    }
    getUserId() {
        return this.userId;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}
exports.default = UserVM;
//# sourceMappingURL=UserVM.js.map