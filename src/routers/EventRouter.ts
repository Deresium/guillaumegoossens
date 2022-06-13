import ApplicationRouter from "./ApplicationRouter";
import IEventRequester from "../business/requesters/IEventRequester";
import OnlyAdminMiddleware from "../middlewares/OnlyAdminMiddleware";
import multer from "multer";

export default class EventRouter extends ApplicationRouter{
    private readonly eventRequester: IEventRequester;

    constructor(eventRequester: IEventRequester) {
        super();
        this.eventRequester = eventRequester;
    }

    initRoutes(): void {
        this.getRouter().post('/event', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const event = await this.eventRequester.addEvent();
            res.status(200).send(event);
        });


        const upload = multer();
        this.getRouter().post('/event/:eventId/image', new OnlyAdminMiddleware().getRequestHandler(), upload.single('file'), async(req, res) => {
            const eventId = parseInt(req.params.eventId);
            const image = req.file.buffer;
            await this.eventRequester.updateEventPicture(eventId, image);
            res.status(200).send();
        });
    }
}
