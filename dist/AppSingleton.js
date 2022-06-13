"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RedirectHttpsMiddleware_1 = __importDefault(require("./middlewares/RedirectHttpsMiddleware"));
const AllowLocahostMiddleware_1 = __importDefault(require("./middlewares/AllowLocahostMiddleware"));
const path_1 = __importDefault(require("path"));
const ReturnIndexMiddleware_1 = __importDefault(require("./middlewares/ReturnIndexMiddleware"));
const DatabaseConnectionMapper_1 = __importDefault(require("./database/datamappers/DatabaseConnectionMapper"));
const LoginRouter_1 = __importDefault(require("./routers/LoginRouter"));
const LoginFacade_1 = __importDefault(require("./business/facades/LoginFacade"));
const UserDataMapper_1 = __importDefault(require("./database/datamappers/UserDataMapper"));
const EventRouter_1 = __importDefault(require("./routers/EventRouter"));
const EventFacade_1 = __importDefault(require("./business/facades/EventFacade"));
const EventDataMapper_1 = __importDefault(require("./database/datamappers/EventDataMapper"));
const ExtractTokenMiddleware_1 = __importDefault(require("./middlewares/ExtractTokenMiddleware"));
const PublicFilesRouter_1 = __importDefault(require("./routers/PublicFilesRouter"));
const AwsFileDataMapper_1 = __importDefault(require("./external/aws/files/AwsFileDataMapper"));
const AwsOperations_1 = __importDefault(require("./external/aws/files/AwsOperations"));
class AppSingleton {
    constructor() {
        this.expressApp = (0, express_1.default)();
        this.initApp();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new AppSingleton();
        }
        return this.instance;
    }
    getExpressApp() {
        return this.expressApp;
    }
    initApp() {
        if (process.env.NODE_ENV === 'production') {
            this.expressApp.use(new RedirectHttpsMiddleware_1.default().getRequestHandler());
        }
        else {
            this.expressApp.use(new AllowLocahostMiddleware_1.default().getRequestHandler());
        }
        const publicDirectoryPath = path_1.default.join(__dirname, '../public');
        this.expressApp.use(express_1.default.static(publicDirectoryPath));
        this.expressApp.use(new ReturnIndexMiddleware_1.default().getRequestHandler());
        const eventFacade = new EventFacade_1.default(new EventDataMapper_1.default(), new AwsFileDataMapper_1.default(new AwsOperations_1.default()));
        this.expressApp.use('/api', new PublicFilesRouter_1.default(eventFacade).getRouter());
        this.expressApp.use(express_1.default.json());
        const databaseConnectionGateway = new DatabaseConnectionMapper_1.default();
        databaseConnectionGateway.testConnect();
        this.expressApp.use(new ExtractTokenMiddleware_1.default().getRequestHandler());
        this.expressApp.use('/api', new LoginRouter_1.default(new LoginFacade_1.default(new UserDataMapper_1.default())).getRouter());
        this.expressApp.use('/api', new EventRouter_1.default(eventFacade).getRouter());
    }
}
exports.default = AppSingleton;
//# sourceMappingURL=AppSingleton.js.map