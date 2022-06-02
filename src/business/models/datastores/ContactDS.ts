export default class ContactDS{
    private readonly name: string;
    private readonly firstName: string;
    private readonly email: string;
    private readonly message: string;

    constructor(name: string, firstName: string, email: string, message: string) {
        this.name = name;
        this.firstName = firstName;
        this.email = email;
        this.message = message;
    }

    public getName(){
        return this.name;
    }

    public getFirstName(){
        return this.firstName;
    }

    public getEmail(){
        return this.email;
    }

    public getMessage(){
        return this.message;
    }

}