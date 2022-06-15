import EventDS from "../models/datastores/EventDS";

export default interface IEventRequester{
    addEvent(): Promise<EventDS>;
    deleteEvent(eventId: number): Promise<void>;
    updateEvent(event: EventDS): Promise<void>;
    getEvent(eventId: number): Promise<EventDS>;
    getAllEvents(showAll: boolean): Promise<Array<EventDS>>;
    getEventPicture(eventId: number): Promise<any>;
    updateEventPicture(eventId: number, picture: Buffer): Promise<void>;
    deleteEventPicture(eventId: number): Promise<void>;
}