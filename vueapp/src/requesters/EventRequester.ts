import axiosServer from "../axios/axiosServer";
import EventParser from "../parsers/EventParser";
import Event from "../models/Event";

export default class EventRequester{
    public static async getAllEvents(showAll: boolean): Promise<Array<Event>> {
        const events = await axiosServer.get('/events', {params: {showAll}});
        return EventParser.parseEvents(events.data);
    }

    public static async getEventById(eventId: number): Promise<Event> {
        const response = await axiosServer.get(`/event/${eventId}`);
        return EventParser.parseEvent(response.data);
    }
}