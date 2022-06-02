export default class LoginRequesterDS {
    private readonly googleJWT: string;
    private readonly email: string;
    private readonly password: string;

    constructor(googleJWT: string, email: string, password: string) {
        this.googleJWT = googleJWT;
        this.email = email;
        this.password = password;
    }

    getGoogleJWT() {
        return this.googleJWT;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }
}