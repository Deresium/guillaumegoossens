"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class UserEntity extends sequelize_1.Model {
    getUserId() {
        return this.userId;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}
exports.default = UserEntity;
UserEntity.init({
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING(512),
        allowNull: false
    },
    googleId: {
        type: sequelize_1.DataTypes.STRING(1024),
        allowNull: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(512),
        allowNull: false
    },
    role: {
        type: sequelize_1.DataTypes.STRING(16),
        allowNull: false
    }
}, {
    tableName: 'Users',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=UserEntity.js.map