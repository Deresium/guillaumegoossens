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
}

EventEntity.init({
    eventId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: DataTypes.STRING(32),
        allowNull: false
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
    }
},{
    tableName: 'Events',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});