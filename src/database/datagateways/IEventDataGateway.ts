import EventEntity from "../entities/EventEntity";
import EventDS from "../../business/models/datastores/EventDS";

export default interface IEventDataGateway{
    addEvent(): Promise<EventEntity>;
    deleteEvent(eventId: number): Promise<void>;
    updateEvent(event: EventDS): Promise<void>;
    getEvent(eventId: number): Promise<EventEntity>;
    getAllEvents(showAll: boolean): Promise<Array<EventEntity>>;
    updateEventPicture(eventId: number): Promise<void>;
}