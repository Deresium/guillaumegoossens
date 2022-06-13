import IPictureDataGateway from "../datagateways/IPictureDataGateway";
import PictureEntity from "../entities/PictureEntity";
import PictureDS from "../../business/models/datastores/PictureDS";
import DatabaseSingleton from "../DatabaseSingleton";

export default class PictureDataMapper implements IPictureDataGateway{
    async addPicture(): Promise<PictureEntity> {
        const lastPicture = await PictureEntity.count();
        return await PictureEntity.create({
            order: lastPicture
        });
    }

    async deletePicture(pictureId: number): Promise<void> {
        await PictureEntity.destroy({
            where:{
                pictureId
            }
        })
    }

    async getAllPictures(): Promise<Array<PictureEntity>> {
        return await PictureEntity.findAll();
        /*return pictures.sort((p1, p2) => {
            if(p1.getOrder() > p2.getOrder()){
                return 1;
            }
            return -1;
        });*/
    }

    async updatePicturesOrder(pictures: Array<PictureDS>): Promise<void> {
        try {
            await DatabaseSingleton.getInstance().getSequelize().transaction(async(t) => {
                for(const picture of pictures){
                    await PictureEntity.update({
                        order: picture.getOrder()
                    },{
                        where:{
                            pictureId: picture.getPictureId()
                        },
                        transaction: t
                    });
                }
            });
        }catch(error) {
            console.error(error);
        }
    }

}