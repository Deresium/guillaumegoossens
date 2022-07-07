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
const PictureDS_1 = __importDefault(require("../models/datastores/PictureDS"));
class PictureFacade {
    constructor(pictureDataGateway, fileDataGateway) {
        this.pictureDataGateway = pictureDataGateway;
        this.fileDataGateway = fileDataGateway;
    }
    addPicture(pictureData) {
        return __awaiter(this, void 0, void 0, function* () {
            const picture = yield this.pictureDataGateway.addPicture();
            yield this.fileDataGateway.savePicture(picture.getPictureId(), pictureData);
        });
    }
    deletePicture(pictureId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pictureDataGateway.deletePicture(pictureId);
            yield this.fileDataGateway.deletePicture(pictureId);
        });
    }
    getPicture(pictureId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fileDataGateway.getPicture(pictureId);
        });
    }
    getAllPictureIds() {
        return __awaiter(this, void 0, void 0, function* () {
            const pictures = yield this.pictureDataGateway.getAllPictures();
            const sortedPictures = pictures.sort((p1, p2) => {
                if (p1.getOrder() > p2.getOrder()) {
                    return 1;
                }
                return -1;
            });
            return sortedPictures.map(picture => picture.getPictureId());
        });
    }
    reorderPictures(picturesIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const picturesDS = new Array();
            for (let i = 0; i < picturesIds.length; ++i) {
                picturesDS.push(new PictureDS_1.default(picturesIds[i], i));
            }
            yield this.pictureDataGateway.updatePicturesOrder(picturesDS);
        });
    }
}
exports.default = PictureFacade;
//# sourceMappingURL=PictureFacade.js.map