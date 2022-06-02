import IContactDataGateway from "../datagateways/IContactDataGateway";
import ContactEntity from "../entities/ContactEntity";
import ContactDS from "../../business/models/datastores/ContactDS";

export default class ContactDataMapper implements IContactDataGateway {
    public async addContact(contact: ContactDS) {
        await ContactEntity.create({
            name: contact.getName(),
            firstName: contact.getFirstName(),
            email: contact.getEmail(),
            message: contact.getMessage()
        });
    }

}