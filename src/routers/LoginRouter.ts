import ApplicationRouter from "./ApplicationRouter";
import LoginRequesterDS from "../business/models/login/LoginRequesterDS";
import ILoginRequester from "../business/requesters/ILoginRequester";
import CookiesGenerator from "../business/models/login/CookiesGenerator";

export default class LoginRouter extends ApplicationRouter{
    private loginRequester: ILoginRequester;

    constructor(loginRequester: ILoginRequester) {
        super();
        this.loginRequester = loginRequester;
    }

    initRoutes(): void {
        this.getRouter().post('/login', async(req, res) => {
            const googleJWT = req.body.googleJWT;
            const email = req.body.email;
            const password = req.body.password;
            if(!googleJWT){
                res.status(400).send();
                return;
            }
            const loginRequester = new LoginRequesterDS(googleJWT, email, password);
            const userVM = await this.loginRequester.login(loginRequester);

            if(!userVM){
                res.status(400).send();
                return;
            }

            const cookieGenerator = new CookiesGenerator(userVM.getUserId(), userVM.getRole());
            res.setHeader('Set-Cookie', [cookieGenerator.getSignatureCookie(), cookieGenerator.getPayloadCookie()]);
            res.status(200).send();
        });

        this.getRouter().post('/logout', async(req, res) => {
            const cookieGenerator = new CookiesGenerator();
            res.setHeader('Set-Cookie', [cookieGenerator.getSignatureCookie(), cookieGenerator.getPayloadCookie()]);
            res.status(200).send();
        });
    }

}