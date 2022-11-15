import ApplicationRouter from "./ApplicationRouter";
import IPictureRequester from "../business/requesters/IPictureRequester";
import OnlyAdminMiddleware from "../middlewares/OnlyAdminMiddleware";
import multer from "multer";

export default class PictureRouter extends ApplicationRouter{
    private readonly pictureRequester: IPictureRequester;

    constructor(pictureRequester: IPictureRequester) {
        super();
        this.pictureRequester = pictureRequester;
    }

    initRoutes(): void {
        this.getRouter().get('/pictures', async(req, res) => {
            const pictureIds = await this.pictureRequester.getAllPictureIds();
            res.status(200).send(pictureIds);
        });

        this.getRouter().delete('/pictures/:pictureId', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const pictureId = parseInt(req.params.pictureId);
            await this.pictureRequester.deletePicture(pictureId);
            res.status(200).send();
        });

        this.getRouter().put('/pictures', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const picturesIds: Array<number> = req.body.picturesIds;
            await this.pictureRequester.reorderPictures(picturesIds);
            res.send();
        });


        const upload = multer();
        this.getRouter().post('/picture', new OnlyAdminMiddleware().getRequestHandler(), upload.single('file'), async(req, res) => {
            const image = req.file.buffer;
            if(req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg'){
                res.status(400).send();
                return;
            }
            await this.pictureRequester.addPicture(image);
            res.status(200).send();
        });
    }

}