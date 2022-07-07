import IPictureRequester from "../requesters/IPictureRequester";
import IPictureDataGateway from "../../database/datagateways/IPictureDataGateway";
import IFileDataGateway from "../../external/aws/files/IFileDataGateway";
import PictureEntity from "../../database/entities/PictureEntity";
import PictureDS from "../models/datastores/PictureDS";

export default class PictureFacade implements IPictureRequester{
    private readonly pictureDataGateway: IPictureDataGateway;
    private readonly fileDataGateway: IFileDataGateway;

    constructor(pictureDataGateway: IPictureDataGateway, fileDataGateway: IFileDataGateway) {
        this.pictureDataGateway = pictureDataGateway;
        this.fileDataGateway = fileDataGateway;
    }

    async addPicture(pictureData: Buffer): Promise<void> {
        const picture: PictureEntity = await this.pictureDataGateway.addPicture();
        await this.fileDataGateway.savePicture(picture.getPictureId(), pictureData);
    }

    async deletePicture(pictureId: number): Promise<void> {
        await this.pictureDataGateway.deletePicture(pictureId);
        await this.fileDataGateway.deletePicture(pictureId);
    }

    async getPicture(pictureId: number): Promise<string> {
        return await this.fileDataGateway.getPicture(pictureId);
    }

    async getAllPictureIds(): Promise<Array<number>> {
        const pictures = await this.pictureDataGateway.getAllPictures();
        const sortedPictures = pictures.sort((p1, p2) => {
            if(p1.getOrder() > p2.getOrder()){
                return 1;
            }
            return -1;
        });
        return sortedPictures.map(picture => picture.getPictureId());
    }

    async reorderPictures(picturesIds: Array<number>): Promise<void> {
        const picturesDS = new Array<PictureDS>();
        for(let i = 0; i < picturesIds.length; ++i){
            picturesDS.push(new PictureDS(picturesIds[i], i));
        }
        await this.pictureDataGateway.updatePicturesOrder(picturesDS);
    }


}