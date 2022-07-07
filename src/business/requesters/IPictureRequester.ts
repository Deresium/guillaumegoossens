export default interface IPictureRequester{
    addPicture(picture: Buffer): Promise<void>;
    getPicture(pictureId: number): Promise<string>;
    getAllPictureIds(): Promise<Array<number>>;
    deletePicture(pictureId: number): Promise<void>;
    reorderPictures(picturesIds: Array<number>): Promise<void>;
}