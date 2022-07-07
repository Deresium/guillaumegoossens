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
const EventDS_1 = __importDefault(require("../models/datastores/EventDS"));
class EventFacade {
    constructor(eventDataGateway, fileDataGateway) {
        this.eventDataGateway = eventDataGateway;
        this.fileDataGateway = fileDataGateway;
    }
    addEvent() {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield this.eventDataGateway.addEvent();
            return EventFacade.parseEventToEventDS(event);
        });
    }
    deleteEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.eventDataGateway.deleteEvent(eventId);
        });
    }
    getAllEvents(showAll) {
        return __awaiter(this, void 0, void 0, function* () {
            const events = yield this.eventDataGateway.getAllEvents(showAll);
            const eventsDS = new Array();
            for (const event of events) {
                eventsDS.push(EventFacade.parseEventToEventDS(event));
            }
            return eventsDS.sort((event1, event2) => {
                if (event1.getFavorite() && !event2.getFavorite()) {
                    return -1;
                }
                if (!event1.getFavorite() && event2.getFavorite()) {
                    return 1;
                }
                if (event1.getDate() > event2.getDate()) {
                    return -1;
                }
                return 1;
            });
        });
    }
    getEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield this.eventDataGateway.getEvent(eventId);
            return (EventFacade.parseEventToEventDS(event));
        });
    }
    updateEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.eventDataGateway.updateEvent(event);
        });
    }
    getEventPicture(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            const event = yield this.eventDataGateway.getEvent(eventId);
            if (event && event.getPicture()) {
                return yield this.fileDataGateway.getEventPicture(eventId);
            }
            return null;
        });
    }
    deleteEventPicture(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve(undefined);
        });
    }
    updateEventPicture(eventId, picture) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fileDataGateway.saveEventPicture(eventId, picture);
            yield this.eventDataGateway.updateEventPicture(eventId);
        });
    }
    static parseEventToEventDS(event) {
        return new EventDS_1.default(event.getEventId(), event.getType(), event.getDate(), event.getLabel(), event.getDescription(), event.getStreet(), event.getZipCode(), event.getTown(), event.getWebsite(), event.getPicture(), event.getFavorite(), event.getShowEvent());
    }
}
exports.default = EventFacade;
//# sourceMappingURL=EventFacade.js.map