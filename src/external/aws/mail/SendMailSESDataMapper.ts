import ISendMailDataGateway from "./ISendMailDataGateway";
import {SendEmailCommand} from "@aws-sdk/client-ses";
import AwsCredentialsSingleton from "../AwsCredentialsSingleton";
import ContactDS from "../../../business/models/datastores/ContactDS";

export default class SendMailSESDataMapper implements ISendMailDataGateway {
    async sendEmailContact(contact: ContactDS): Promise<void> {
        const client = AwsCredentialsSingleton.getInstance().getSESClient();
        const command = new SendEmailCommand({
            Message: {
                Subject: {
                    Data: `Nouveau message de ${contact.getFirstName()} ${contact.getName()}`,
                },
                Body: {
                    Html: {
                        Data: SendMailSESDataMapper.getText(true, contact)
                    },
                    Text: {
                        Data: SendMailSESDataMapper.getText(false, contact)
                    }
                }
            },
            Destination: {
                ToAddresses: ['guillaumegoossensmusique@gmail.com']
               /* ToAddresses: ['dimitri.steinbusch@hotmail.com']*/
            },
            Source: 'info@guillaumegoossens.be'
        });

        try{
            await client.send(command);
            console.log('guillaumegoossensmusique@gmail.com');
        }catch(exception){
            console.error(exception);
        }
    }

    private static getText(html: boolean, contact: ContactDS) {
        let separator = '\n';
        if (html) {
            separator = '<br/>'
        }

        return `
        Nouveau message de ${contact.getFirstName()} ${contact.getName()} (email: ${contact.getEmail()}): ${separator}
        ${contact.getMessage()}
        `
    }


}