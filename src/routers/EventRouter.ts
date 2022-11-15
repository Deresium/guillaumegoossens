import ApplicationRouter from "./ApplicationRouter";
import IEventRequester from "../business/requesters/IEventRequester";
import OnlyAdminMiddleware from "../middlewares/OnlyAdminMiddleware";
import multer from "multer";
import EventDS from "../business/models/datastores/EventDS";

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

        this.getRouter().put('/event', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const event = req.body.event;
            const eventDS = new EventDS(event.eventId, event.type, event.date, event.label, event.description, event.street, event.zipCode, event.town, event.website, event.picture, event.favorite, event.showEvent);
            await this.eventRequester.updateEvent(eventDS);
            res.status(200).send();
        });

        this.getRouter().delete('/event/:eventId', new OnlyAdminMiddleware().getRequestHandler(), async(req, res) => {
            const eventId = parseInt(req.params.eventId);
            await this.eventRequester.deleteEvent(eventId);
            res.status(200).send();
        });

        this.getRouter().get('/events', async(req, res) => {
            const showAll: boolean = req.query.showAll === 'true';
            const events = await this.eventRequester.getAllEvents(showAll);
            res.status(200).send(events);
        });

        this.getRouter().get('/event/:eventId', async(req, res) => {
            const eventId = parseInt(req.params.eventId);
            const event = await this.eventRequester.getEvent(eventId);
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
