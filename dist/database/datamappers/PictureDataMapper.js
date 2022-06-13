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
const PictureEntity_1 = __importDefault(require("../entities/PictureEntity"));
const DatabaseSingleton_1 = __importDefault(require("../DatabaseSingleton"));
class PictureDataMapper {
    addPicture() {
        return __awaiter(this, void 0, void 0, function* () {
            const lastPicture = yield PictureEntity_1.default.count();
            return yield PictureEntity_1.default.create({
                order: lastPicture
            });
        });
    }
    deletePicture(pictureId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield PictureEntity_1.default.destroy({
                where: {
                    pictureId
                }
            });
        });
    }
    getAllPictures() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PictureEntity_1.default.findAll();
            /*return pictures.sort((p1, p2) => {
                if(p1.getOrder() > p2.getOrder()){
                    return 1;
                }
                return -1;
            });*/
        });
    }
    updatePicturesOrder(pictures) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield DatabaseSingleton_1.default.getInstance().getSequelize().transaction((t) => __awaiter(this, void 0, void 0, function* () {
                    for (const picture of pictures) {
                        yield PictureEntity_1.default.update({
                            order: picture.getOrder()
                        }, {
                            where: {
                                pictureId: picture.getPictureId()
                            },
                            transaction: t
                        });
                    }
                }));
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.default = PictureDataMapper;
//# sourceMappingURL=PictureDataMapper.js.map