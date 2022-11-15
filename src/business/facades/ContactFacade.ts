import IContactRequester from "../requesters/IContactRequester";
import ContactDS from "../models/datastores/ContactDS";
import IContactDataGateway from "../../database/datagateways/IContactDataGateway";
import ISendMailDataGateway from "../../external/aws/mail/ISendMailDataGateway";

export default class ContactFacade implements IContactRequester {
    private readonly contactDataGateway: IContactDataGateway;
    private readonly sendMailDataGateway: ISendMailDataGateway;

    constructor(contactDataGateway: IContactDataGateway, sendMailDataGateway: ISendMailDataGateway) {
        this.contactDataGateway = contactDataGateway;
        this.sendMailDataGateway = sendMailDataGateway;
    }

    async sendContact(contact: ContactDS): Promise<void> {
        try {
            await this.sendMailDataGateway.sendEmailContact(contact);
            await this.contactDataGateway.addContact(contact);
        }catch(error){
            console.error(error);
        }
    }

}