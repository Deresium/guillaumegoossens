export default class UserVM{
    private readonly userId: number;
    private readonly email: string;
    private readonly role: string;

    constructor(userId: number, email: string, role: string) {
        this.userId = userId;
        this.email = email;
        this.role = role;
    }

    getUserId(){
        return this.userId;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }
}