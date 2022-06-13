export default interface IFileDataGateway {
    getPicture(pictureId: number): Promise<string>;
    savePicture(pictureId: number, picture: Buffer): Promise<void>;
    deletePicture(pictureId: number): Promise<void>;
    getEventPicture(eventId: number): Promise<string>;
    deleteEventPicture(eventId: number): Promise<void>;
    saveEventPicture(eventId: number, picture: Buffer): Promise<void>;
}