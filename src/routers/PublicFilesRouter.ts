import ApplicationRouter from "./ApplicationRouter";
import IEventRequester from "../business/requesters/IEventRequester";
import IPictureRequester from "../business/requesters/IPictureRequester";

export default class PublicFilesRouter extends ApplicationRouter{
    private readonly eventRequester: IEventRequester;
    private readonly pictureRequester: IPictureRequester;

    constructor(eventRequester: IEventRequester, pictureRequester: IPictureRequester) {
        super();
        this.eventRequester = eventRequester;
        this.pictureRequester = pictureRequester;
    }

    initRoutes(): void {
        this.getRouter().get('/event/:eventId/image', async(req, res) => {
            const eventId = parseInt(req.params.eventId);
            const image = await this.eventRequester.getEventPicture(eventId);
            if(image){
                res.setHeader('Content-Type', 'image/jpg');
                res.end(image, 'base64');
            }else{
                res.status(404).send();
            }
        });

        this.getRouter().get('/picture/:pictureId', async(req, res) => {
            const pictureId = parseInt(req.params.pictureId);
            const image = await this.pictureRequester.getPicture(pictureId);
            if(image){
                res.setHeader('Content-Type', 'image/jpg');
                res.setHeader('Content-Disposition', `inline; filename=${pictureId}.jpg`);
                res.end(image, 'base64');
            }else{
                res.status(404).send();
            }
        });
    }
}