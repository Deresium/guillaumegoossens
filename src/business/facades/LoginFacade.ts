import ILoginRequester from "../requesters/ILoginRequester";
import LoginRequesterDS from "../models/login/LoginRequesterDS";
import UserEntity from "../../database/entities/UserEntity";
import GoogleLoginStrategy from "../models/login/GoogleLoginStrategy";
import IUserDataGateway from "../../database/datagateways/IUserDataGateway";
import UserVM from "../models/viewmodels/UserVM";

export default class LoginFacade implements ILoginRequester {
    private userDataGateway: IUserDataGateway;

    constructor(userDataGateway: IUserDataGateway) {
        this.userDataGateway = userDataGateway;
    }

    async login(loginRequesterDS: LoginRequesterDS): Promise<UserVM> {
        let userEntity: UserEntity;
        if (loginRequesterDS.getGoogleJWT()) {
            userEntity = await new GoogleLoginStrategy(loginRequesterDS, this.userDataGateway).login();
        }
        if (!userEntity) {
            return null;
        }
        return new UserVM(userEntity.getUserId(), userEntity.getEmail(), userEntity.getRole());
    }

}