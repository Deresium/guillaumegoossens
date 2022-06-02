export default class UserState {
    private role: string | null;

    constructor() {
        this.role = null;
    }

    public isUserLoggedIn(){
        return this.role != null;
    }

    public isUserAdmin(){
        return this.role === 'ADMIN';
    }

    public setUserRole(role: string){
        this.role = role;
    }

    public getUserRole(){
        return this.role;
    }
}