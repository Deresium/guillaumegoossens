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
const OnlyAdminMiddleware_1 = __importDefault(require("../middlewares/OnlyAdminMiddleware"));
const multer_1 = __importDefault(require("multer"));
class PictureRouter extends ApplicationRouter_1.default {
    constructor(pictureRequester) {
        super();
        this.pictureRequester = pictureRequester;
    }
    initRoutes() {
        this.getRouter().get('/pictures', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pictureIds = yield this.pictureRequester.getAllPictureIds();
            res.status(200).send(pictureIds);
        }));
        this.getRouter().delete('/pictures/:pictureId', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pictureId = parseInt(req.params.pictureId);
            yield this.pictureRequester.deletePicture(pictureId);
            res.status(200).send();
        }));
        this.getRouter().put('/pictures', new OnlyAdminMiddleware_1.default().getRequestHandler(), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const picturesIds = req.body.picturesIds;
            yield this.pictureRequester.reorderPictures(picturesIds);
            res.send();
        }));
        const upload = (0, multer_1.default)();
        this.getRouter().post('/picture', new OnlyAdminMiddleware_1.default().getRequestHandler(), upload.single('file'), (req, res) => __awaiter(this, void 0, void 0, function* () {
            const image = req.file.buffer;
            if (req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg') {
                res.status(400).send();
                return;
            }
            yield this.pictureRequester.addPicture(image);
            res.status(200).send();
        }));
    }
}
exports.default = PictureRouter;
//# sourceMappingURL=PictureRouter.js.map