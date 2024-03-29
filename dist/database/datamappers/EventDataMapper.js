"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventEntity_1 = __importDefault(require("../entities/EventEntity"));
class EventDataMapper {
    addEvent() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield EventEntity_1.default.create({
                picture: false,
                favorite: false,
                showEvent: false
            });
        });
    }
    deleteEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield EventEntity_1.default.destroy({
                where: {
                    eventId
                }
            });
        });
    }
    getAllEvents(showAll) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (showAll) {
                    return yield EventEntity_1.default.findAll();
                }
                return yield EventEntity_1.default.findAll({
                    where: {
                        showEvent: true
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getEvent(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield EventEntity_1.default.findByPk(eventId);
        });
    }
    updateEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            yield EventEntity_1.default.update({
                type: event.getType(),
                date: event.getDate(),
                label: event.getLabel(),
                description: event.getDescription(),
                street: event.getStreet(),
                zipCode: event.getZipCode(),
                town: event.getTown(),
                website: event.getWebsite(),
                favorite: event.getFavorite(),
                showEvent: event.getShowEvent(),
                websiteText: event.getWebsiteText()
            }, {
                where: {
                    eventId: event.getEventId()
                }
            });
        });
    }
    updateEventPicture(eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield EventEntity_1.default.update({
                picture: true
            }, {
                where: {
                    eventId: eventId
                }
            });
        });
    }
}
exports.default = EventDataMapper;
//# sourceMappingURL=EventDataMapper.js.map