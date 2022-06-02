import ILoginStrategy from "./ILoginStrategy";
import UserEntity from "../../../database/entities/UserEntity";
import {OAuth2Client} from "google-auth-library";
import IUserDataGateway from "../../../database/datagateways/IUserDataGateway";
import LoginRequesterDS from "./LoginRequesterDS";
import jwt from "jsonwebtoken"

export default class GoogleLoginStrategy implements ILoginStrategy{
    private loginRequest: LoginRequesterDS;
    private readonly userDataGateway: IUserDataGateway;

    constructor(loginRequester: LoginRequesterDS, userDataGateway: IUserDataGateway) {
        this.loginRequest = loginRequester;
        this.userDataGateway = userDataGateway;
    }

    async login(): Promise<UserEntity> {
        const client = new OAuth2Client(process.env.GOOGLE_ID_AUTH, process.env.GOOGLE_SECRET_AUTH);

        const ticket = await client.verifyIdToken({
            idToken: this.loginRequest.getGoogleJWT(),
            audience: process.env.GOOGLE_ID_AUTH
        });

        const payload = ticket.getPayload();

        if(!payload || payload.iss !== 'https://accounts.google.com' || !payload.email_verified) {
            return null;
        }


        const userid = payload.sub;
        const name = payload.name;
        const email = payload.email;

        let user = await this.userDataGateway.getUserByGoogleId(userid);
        if (!user) {
            user = await this.userDataGateway.createGoogleUser(name, email, userid);
        }
        return user;
    }

}