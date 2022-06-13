export default interface IPictureRequester{
    addPicture(picture: Buffer): Promise<void>;
    getPicture(pictureId: number): Promise<string>;
    deletePicture(pictureId: number): Promise<void>;
}