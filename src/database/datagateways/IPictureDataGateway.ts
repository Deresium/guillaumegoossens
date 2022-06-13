import PictureEntity from "../entities/PictureEntity";
import PictureDS from "../../business/models/datastores/PictureDS";

export default interface IPictureDataGateway{
    addPicture(): Promise<PictureEntity>;
    deletePicture(pictureId: number): Promise<void>;
    getAllPictures(): Promise<Array<PictureEntity>>;
    updatePicturesOrder(pictures: Array<PictureDS>): Promise<void>;
}