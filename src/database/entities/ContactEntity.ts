import {Model, DataTypes} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class ContactEntity extends Model{
    private contactId: number;
    private name: string;
    private firstName: string;
    private email: string;
    private message: string;
}

ContactEntity.init({
    contactId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    message: {
        type: DataTypes.STRING(4096),
        allowNull: false
    }
},{
    tableName: 'Contacts',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});