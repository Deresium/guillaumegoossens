import {Model, DataTypes} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class PictureEntity extends Model{
    private pictureId: number;
    private order: number;

    public getPictureId(){
        return this.pictureId;
    }

    public getOrder(){
        return this.order;
    }
}

PictureEntity.init({
    pictureId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName: 'Pictures',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});