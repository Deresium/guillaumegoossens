import IEventDataGateway from "../datagateways/IEventDataGateway";
import EventEntity from "../entities/EventEntity";
import EventDS from "../../business/models/datastores/EventDS";

export default class EventDataMapper implements IEventDataGateway{
    public async addEvent(event: EventDS) {
        await EventEntity.create({
            type: event.getType(),
            date: event.getDate(),
            label: event.getLabel(),
            description: event.getDescription(),
            street: event.getStreet(),
            zipCode: event.getZipCode(),
            town: event.getTown(),
            website: event.getWebsite(),
            picture: event.getPicture()
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
            picture: event.getPicture()
        },{
            where:{
                eventId: event.getEventId()
            }
        });
    }

}