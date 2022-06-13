import Event from "../models/Event";

export default class EventParser{
    public static parseEvent(eventData: any): Event {
        return new Event(eventData.eventId, eventData.type, eventData.date, eventData.label, eventData.description, eventData.street, eventData.zipCode, eventData.town, eventData.website, eventData.picture, eventData.favorite, eventData.showEvent);
    }
}