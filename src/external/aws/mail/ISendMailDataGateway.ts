import ContactDS from "../../../business/models/datastores/ContactDS";

export default interface ISendMailDataGateway {
    sendEmailContact(contact: ContactDS): Promise<void>;
}