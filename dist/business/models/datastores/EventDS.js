"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventDS {
    constructor(eventId, type, date, label, description, street, zipCode, town, website, picture) {
        this.eventId = eventId;
        this.type = type;
        this.date = date;
        this.label = label;
        this.description = description;
        this.street = street;
        this.zipCode = zipCode;
        this.town = town;
        this.website = website;
        this.picture = picture;
    }
    getEventId() {
        return this.eventId;
    }
    getType() {
        return this.type;
    }
    getDate() {
        return this.date;
    }
    getDescription() {
        return this.description;
    }
    getLabel() {
        return this.label;
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
}
exports.default = EventDS;
//# sourceMappingURL=EventDS.js.map