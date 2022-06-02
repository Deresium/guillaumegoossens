import ContactDS from "../../business/models/datastores/ContactDS";

export default interface IContactDataGateway{
    addContact(contact: ContactDS): Promise<void>;
}