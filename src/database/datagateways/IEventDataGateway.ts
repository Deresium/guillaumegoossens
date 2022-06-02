import EventEntity from "../entities/EventEntity";
import EventDS from "../../business/models/datastores/EventDS";

export default interface IEventDataGateway{
    addEvent(event: EventDS): Promise<void>;
    deleteEvent(eventId: number): Promise<void>;
    updateEvent(event: EventDS): Promise<void>;
    getEvent(eventId: number): Promise<EventEntity>;
    getAllEvents(): Promise<Array<EventEntity>>;
}