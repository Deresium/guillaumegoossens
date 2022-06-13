import ApplicationRouter from "./ApplicationRouter";
import IEventRequester from "../business/requesters/IEventRequester";

export default class PublicFilesRouter extends ApplicationRouter{
    private readonly eventRequester: IEventRequester;

    constructor(eventRequester: IEventRequester) {
        super();
        this.eventRequester = eventRequester;
    }

    initRoutes(): void {
        this.getRouter().get('/event/:eventId/image', async(req, res) => {
            const eventId = parseInt(req.params.eventId);
            const image = await this.eventRequester.getEventPicture(eventId);
            if(image){
                res.setHeader('Content-Type', 'image/*');
                res.end(image, 'base64');
            }else{
                res.status(404).send();
            }
        });
    }
}