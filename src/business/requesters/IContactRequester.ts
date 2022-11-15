import ContactDS from "../models/datastores/ContactDS";

export default interface IContactRequester{
    sendContact(contact: ContactDS);
}