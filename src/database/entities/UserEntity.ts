import {Model, DataTypes} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class UserEntity extends Model{
    private userId: number;
    private email: string;
    private googleId: string;
    private name: string;
    private role: string;

    public getUserId(){
        return this.userId;
    }

    public getEmail(){
        return this.email;
    }

    public getRole(){
        return this.role;
    }

}

UserEntity.init({
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    googleId: {
        type: DataTypes.STRING(1024),
        allowNull: true
    },
    name: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING(16),
        allowNull: false
    }
},{
    tableName: 'Users',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});