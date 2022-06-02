import {useUserStore} from "./store/user/userStore";
import axiosServer from "./axios/axiosServer";
import DecryptCookie from "./DecryptCookie";

export default class Login{
    private readonly googleJWT: any;
    private readonly email?: string;
    private readonly password?: string;
    private data: any;

    constructor(googleJWT: any, email?: string, password?: string) {
        this.googleJWT = googleJWT;
        this.email = email;
        this.password = password;
    }

    public async login (){
        if(this.isLoggedIn())
            return;

        if(this.googleJWT)
            this.data = this.constructGoogleData();
        else
            this.data = this.constructClassicData();

        await this.tryLogin();
    }

    private isLoggedIn(): boolean{
        const userStore = useUserStore();
        return userStore.isLoggedIn;
    }

    private constructGoogleData(){
        return{
            googleJWT: this.googleJWT
        }
    }

    private constructClassicData(){
        return{
            email: this.email,
            password: this.password
        }
    }

    private async tryLogin(){
        try {
            const response = await axiosServer.post('/login', this.data);
            if (response.status === 200) {
                await new DecryptCookie().tryLoginUser();
            }
        }catch(error: any){
            alert(error);
        }
    }
}