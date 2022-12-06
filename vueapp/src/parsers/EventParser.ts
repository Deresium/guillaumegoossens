import Event from "../models/Event";

export default class EventParser{
    public static parseEvent(eventData: any): Event {
        return new Event(eventData.eventId, eventData.type, eventData.date, eventData.label, eventData.description,
            eventData.street, eventData.zipCode, eventData.town, eventData.website, eventData.picture, eventData.favorite,
            eventData.showEvent, eventData.websiteText);
    }

    public static parseEvents(eventsData: any): Array<Event> {
        const events = new Array<Event>();
        for(const event of eventsData){
            events.push(EventParser.parseEvent(event));
        }
        return events;
    }
}