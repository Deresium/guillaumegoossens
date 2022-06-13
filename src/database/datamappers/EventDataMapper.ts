import IEventDataGateway from "../datagateways/IEventDataGateway";
import EventEntity from "../entities/EventEntity";
import EventDS from "../../business/models/datastores/EventDS";

export default class EventDataMapper implements IEventDataGateway{
    public async addEvent(): Promise<EventEntity> {
        return await EventEntity.create({
            picture: false,
            favorite: false,
            showEvent: false
        });
    }

    async deleteEvent(eventId: number): Promise<void> {
        await EventEntity.destroy({
            where:{
                eventId
            }
        });
    }

    async getAllEvents(): Promise<Array<EventEntity>> {
        return await EventEntity.findAll();
    }

    async getEvent(eventId: number): Promise<EventEntity> {
        return await EventEntity.findByPk(eventId);
    }

    async updateEvent(event: EventDS): Promise<void> {
        await EventEntity.update({
            type: event.getType(),
            date: event.getDate(),
            label: event.getLabel(),
            description: event.getDescription(),
            street: event.getStreet(),
            zipCode: event.getZipCode(),
            town: event.getTown(),
            website: event.getWebsite(),
            picture: event.getPicture(),
            favorite: event.getFavorite()
        },{
            where:{
                eventId: event.getEventId()
            }
        });
    }

    async updateEventPicture(eventId: number): Promise<void> {
        await EventEntity.update({
            picture: true
        },{
            where: {
                eventId: eventId
            }
        });
    }
}