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
const ApplicationRouter_1 = __importDefault(require("./ApplicationRouter"));
class PublicFilesRouter extends ApplicationRouter_1.default {
    constructor(eventRequester, pictureRequester) {
        super();
        this.eventRequester = eventRequester;
        this.pictureRequester = pictureRequester;
    }
    initRoutes() {
        this.getRouter().get('/event/:eventId/image', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const eventId = parseInt(req.params.eventId);
            const image = yield this.eventRequester.getEventPicture(eventId);
            if (image) {
                res.setHeader('Content-Type', 'image/jpg');
                res.end(image, 'base64');
            }
            else {
                res.status(404).send();
            }
        }));
        this.getRouter().get('/picture/:pictureId', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pictureId = parseInt(req.params.pictureId);
            const image = yield this.pictureRequester.getPicture(pictureId);
            if (image) {
                res.setHeader('Content-Type', 'image/jpg');
                res.setHeader('Content-Disposition', `inline; filename=${pictureId}.jpg`);
                res.end(image, 'base64');
            }
            else {
                res.status(404).send();
            }
        }));
    }
}
exports.default = PublicFilesRouter;
//# sourceMappingURL=PublicFilesRouter.js.map