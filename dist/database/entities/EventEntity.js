"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class EventEntity extends sequelize_1.Model {
    getEventId() {
        return this.eventId;
    }
    getType() {
        return this.type;
    }
    getDate() {
        return this.date;
    }
    getLabel() {
        return this.label;
    }
    getDescription() {
        return this.description;
    }
    getStreet() {
        return this.street;
    }
    getZipCode() {
        return this.zipCode;
    }
    getTown() {
        return this.town;
    }
    getWebsite() {
        return this.website;
    }
    getPicture() {
        return this.picture;
    }
    getFavorite() {
        return this.favorite;
    }
    getShowEvent() {
        return this.showEvent;
    }
}
exports.default = EventEntity;
EventEntity.init({
    eventId: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: sequelize_1.DataTypes.STRING(32),
        allowNull: true
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true
    },
    label: {
        type: sequelize_1.DataTypes.STRING(256),
        allowNull: true
    },
    description: {
        type: sequelize_1.DataTypes.STRING(4096),
        allowNull: true
    },
    street: {
        type: sequelize_1.DataTypes.STRING(256),
        allowNull: true
    },
    zipCode: {
        type: sequelize_1.DataTypes.STRING(16),
        allowNull: true
    },
    town: {
        type: sequelize_1.DataTypes.STRING(256),
        allowNull: true
    },
    website: {
        type: sequelize_1.DataTypes.STRING(512),
        allowNull: true
    },
    picture: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    favorite: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    showEvent: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    tableName: 'Events',
    sequelize: DatabaseSingleton_1.default.getInstance().getSequelize()
});
//# sourceMappingURL=EventEntity.js.map