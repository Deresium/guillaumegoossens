import ApplicationRouter from "./ApplicationRouter";
import IContactRequester from "../business/requesters/IContactRequester";
import ContactDS from "../business/models/datastores/ContactDS";

export default class ContactRouter extends ApplicationRouter {

    private readonly contactRequester: IContactRequester;

    constructor(contactRequester: IContactRequester) {
        super();
        this.contactRequester = contactRequester;
    }

    initRoutes(): void {
        this.getRouter().post('/contact', async(req, res) => {
            const name = req.body.name;
            const firstName = req.body.firstName;
            const email = req.body.email;
            const message = req.body.message;
            const contact = new ContactDS(name, firstName, email, message);
            await this.contactRequester.sendContact(contact);
           res.status(200).send();
        });
    }
}