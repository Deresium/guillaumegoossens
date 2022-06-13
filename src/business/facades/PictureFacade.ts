import IPictureRequester from "../requesters/IPictureRequester";
import IPictureDataGateway from "../../database/datagateways/IPictureDataGateway";
import IFileDataGateway from "../../external/aws/files/IFileDataGateway";
import PictureEntity from "../../database/entities/PictureEntity";

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


}