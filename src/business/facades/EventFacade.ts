import IEventRequester from "../requesters/IEventRequester";
import EventDS from "../models/datastores/EventDS";
import IEventDataGateway from "../../database/datagateways/IEventDataGateway";
import EventEntity from "../../database/entities/EventEntity";
import IFileDataGateway from "../../external/aws/files/IFileDataGateway";

export default class EventFacade implements IEventRequester {
    private readonly eventDataGateway: IEventDataGateway;
    private readonly fileDataGateway: IFileDataGateway;

    constructor(eventDataGateway: IEventDataGateway, fileDataGateway: IFileDataGateway) {
        this.eventDataGateway = eventDataGateway;
        this.fileDataGateway = fileDataGateway;
    }

    async addEvent(): Promise<EventDS> {
        const event = await this.eventDataGateway.addEvent();
        return EventFacade.parseEventToEventDS(event);
    }

    async deleteEvent(eventId: number): Promise<void> {
        await this.eventDataGateway.deleteEvent(eventId);
    }

    async getAllEvents(showAll: boolean): Promise<Array<EventDS>> {
        const events = await this.eventDataGateway.getAllEvents(showAll);
        const eventsDS = new Array<EventDS>();
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
            if (event1.getDate() < event2.getDate()) {
                return -1;
            }
            return 1;
        });
    }

    async getEvent(eventId: number): Promise<EventDS> {
        const event = await this.eventDataGateway.getEvent(eventId);
        return (EventFacade.parseEventToEventDS(event));
    }

    async updateEvent(event: EventDS): Promise<void> {
        await this.eventDataGateway.updateEvent(event);
    }

    async getEventPicture(eventId: number): Promise<any> {
        const event = await this.eventDataGateway.getEvent(eventId);
        if(event && event.getPicture()) {
            return await this.fileDataGateway.getEventPicture(eventId);
        }
        return null;
    }

    async deleteEventPicture(eventId: number): Promise<void> {
        return Promise.resolve(undefined);
    }

    async updateEventPicture(eventId: number, picture: Buffer): Promise<void> {
        await this.fileDataGateway.saveEventPicture(eventId, picture);
        await this.eventDataGateway.updateEventPicture(eventId);

    }

    private static parseEventToEventDS(event: EventEntity) {
        return new EventDS(event.getEventId(), event.getType(), event.getDate(), event.getLabel(), event.getDescription(), event.getStreet(), event.getZipCode(), event.getTown(), event.getWebsite(), event.getPicture(), event.getFavorite(), event.getShowEvent());
    }

}