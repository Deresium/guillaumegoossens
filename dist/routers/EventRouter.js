"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApplicationRouter_1 = __importDefault(require("./ApplicationRouter"));
const OnlyAdminMiddleware_1 = __importDefault(require("../middlewares/OnlyAdminMiddleware"));
const multer_1 = __importDefault(require("multer"));
const EventDS_1 = __importDefault(require("../business/models/datastores/EventDS"));
class EventRouter extends ApplicationRouter_1.default {
    constructor(eventRequester) {
        super();
        this.eventRequester = eventRequester;
    }
    initRoutes() {
        this.getRouter().post('/event', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const event = yield this.eventRequester.addEvent();
            res.status(200).send(event);
        }));
        this.getRouter().put('/event', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const event = req.body.event;
            const eventDS = new EventDS_1.default(event.eventId, event.type, event.date, event.label, event.description, event.street, event.zipCode, event.town, event.website, event.picture, event.favorite, event.showEvent);
            yield this.eventRequester.updateEvent(eventDS);
            res.status(200).send();
        }));
        this.getRouter().delete('/event/:eventId', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const eventId = parseInt(req.params.eventId);
            yield this.eventRequester.deleteEvent(eventId);
            res.status(200).send();
        }));
        this.getRouter().get('/events', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const showAll = req.query.showAll;
            const events = yield this.eventRequester.getAllEvents(showAll);
            res.status(200).send(events);
        }));
        this.getRouter().get('/event/:eventId', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const eventId = parseInt(req.params.eventId);
            const event = yield this.eventRequester.getEvent(eventId);
            res.status(200).send(event);
        }));
        const upload = (0, multer_1.default)();
        this.getRouter().post('/event/:eventId/image', new OnlyAdminMiddleware_1.default().getRequestHandler(), upload.single('file'), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const eventId = parseInt(req.params.eventId);
            const image = req.file.buffer;
            yield this.eventRequester.updateEventPicture(eventId, image);
            res.status(200).send();
        }));
    }
}
exports.default = EventRouter;
//# sourceMappingURL=EventRouter.js.map