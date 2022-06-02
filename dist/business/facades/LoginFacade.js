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
const GoogleLoginStrategy_1 = __importDefault(require("../models/login/GoogleLoginStrategy"));
const UserVM_1 = __importDefault(require("../models/viewmodels/UserVM"));
class LoginFacade {
    constructor(userDataGateway) {
        this.userDataGateway = userDataGateway;
    }
    login(loginRequesterDS) {
        return __awaiter(this, void 0, void 0, function* () {
            let userEntity;
            if (loginRequesterDS.getGoogleJWT()) {
                userEntity = yield new GoogleLoginStrategy_1.default(loginRequesterDS, this.userDataGateway).login();
            }
            if (!userEntity) {
                return null;
            }
            return new UserVM_1.default(userEntity.getUserId(), userEntity.getEmail(), userEntity.getRole());
        });
    }
}
exports.default = LoginFacade;
//# sourceMappingURL=LoginFacade.js.map