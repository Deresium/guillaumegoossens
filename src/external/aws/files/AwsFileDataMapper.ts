import IFileDataGateway from "./IFileDataGateway";
import IAwsOperations from "./IAwsOperations";

export default class AwsFileDataMapper implements IFileDataGateway{
    private awsOperations: IAwsOperations;

    constructor(awsOperations: IAwsOperations) {
        this.awsOperations = awsOperations;
    }

    async getPicture(pictureId: number): Promise<string> {
        return await this.awsOperations.getFile(`pictures/${pictureId}`);
    }

    async deletePicture(pictureId: number): Promise<void> {
        await this.awsOperations.deleteFile(`pictures/${pictureId}`);
    }

    async savePicture(pictureId: number, picture: Buffer): Promise<void> {
        await this.awsOperations.addFile(`pictures/${pictureId}`, picture);
    }

    async deleteEventPicture(eventId: number): Promise<void> {
        await this.awsOperations.deleteFile(`events/${eventId}`);
    }

    async getEventPicture(eventId: number): Promise<string> {
        return await this.awsOperations.getFile(`events/${eventId}`);
    }

    async saveEventPicture(eventId: number, picture: Buffer): Promise<void> {
        await this.awsOperations.addFile(`events/${eventId}`, picture);
    }
}