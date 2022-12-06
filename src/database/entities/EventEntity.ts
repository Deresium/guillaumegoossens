import {Model, DataTypes} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class EventEntity extends Model{
    private eventId: number;
    private type: string;
    private date: Date;
    private label: string;
    private description: string;
    private street: string;
    private zipCode: string;
    private town: string;
    private website: string;
    private picture: boolean;
    private favorite: boolean;
    private showEvent: boolean;
    private websiteText: string;

    public getEventId(){
        return this.eventId;
    }

    public getType(){
        return this.type;
    }

    public getDate(){
        return this.date;
    }

    public getLabel(){
        return this.label;
    }

    public getDescription(){
        return this.description;
    }

    public getStreet(){
        return this.street;
    }

    public getZipCode(){
        return this.zipCode;
    }

    public getTown(){
        return this.town;
    }

    public getWebsite(){
        return this.website;
    }

    public getPicture(){
        return this.picture;
    }

    public getFavorite(){
        return this.favorite;
    }

    public getShowEvent(){
        return this.showEvent;
    }

    public getWebsiteText(){
        return this.websiteText;
    }
}

EventEntity.init({
    eventId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING(32),
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    label: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    description: {
        type: DataTypes.STRING(4096),
        allowNull: true
    },
    street: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    zipCode: {
        type: DataTypes.STRING(16),
        allowNull: true
    },
    town: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    website: {
        type: DataTypes.STRING(512),
        allowNull: true
    },
    picture: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    showEvent: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    websiteText: {
        type: DataTypes.STRING(1024),
        allowNull: true
    }
},{
    tableName: 'Events',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});