import {Model, DataTypes} from "sequelize";
import DatabaseSingleton from "../DatabaseSingleton";

export default class PictureEntity extends Model{
    private pictureId: number;
}

PictureEntity.init({
    pictureId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
},{
    tableName: 'Pictures',
    sequelize: DatabaseSingleton.getInstance().getSequelize()
});