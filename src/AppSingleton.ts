import express from "express";
import RedirectHttpsMiddleware from "./middlewares/RedirectHttpsMiddleware";
import AllowLocalhostMiddleware from "./middlewares/AllowLocahostMiddleware";
import path from "path";
import ReturnIndexMiddleware from "./middlewares/ReturnIndexMiddleware";
import DatabaseConnectionMapper from "./database/datamappers/DatabaseConnectionMapper";
import LoginRouter from "./routers/LoginRouter";
import LoginFacade from "./business/facades/LoginFacade";
import UserDataMapper from "./database/datamappers/UserDataMapper";
import EventRouter from "./routers/EventRouter";
import EventFacade from "./business/facades/EventFacade";
import EventDataMapper from "./database/datamappers/EventDataMapper";
import ExtractTokenMiddleware from "./middlewares/ExtractTokenMiddleware";
import PublicFilesRouter from "./routers/PublicFilesRouter";
import AwsFileDataMapper from "./external/aws/files/AwsFileDataMapper";
import AwsOperations from "./external/aws/files/AwsOperations";
import PictureRouter from "./routers/PictureRouter";
import PictureFacade from "./business/facades/PictureFacade";
import PictureDataMapper from "./database/datamappers/PictureDataMapper";

export default class AppSingleton {
    private static instance: AppSingleton;
    private readonly expressApp;

    private constructor() {
        this.expressApp = express();
        this.initApp();
    }

    public static getInstance(): AppSingleton {
        if (!this.instance) {
            this.instance = new AppSingleton();
        }
        return this.instance;
    }

    public getExpressApp() {
        return this.expressApp;
    }

    private initApp() {
        if(process.env.NODE_ENV === 'production') {
            this.expressApp.use(new RedirectHttpsMiddleware().getRequestHandler());
        }
        else {
            this.expressApp.use(new AllowLocalhostMiddleware().getRequestHandler());
        }

        const publicDirectoryPath = path.join(__dirname, '../public');
        this.expressApp.use(express.static(publicDirectoryPath));

        this.expressApp.use(new ReturnIndexMiddleware().getRequestHandler());

        const fileDataMapper = new AwsFileDataMapper(new AwsOperations());
        const eventFacade = new EventFacade(new EventDataMapper(), fileDataMapper);
        const pictureFacade = new PictureFacade(new PictureDataMapper(), fileDataMapper);


        this.expressApp.use('/api', new PublicFilesRouter(eventFacade, pictureFacade).getRouter());

        this.expressApp.use(express.json());

        const databaseConnectionGateway = new DatabaseConnectionMapper();
        databaseConnectionGateway.testConnect();

        this.expressApp.use(new ExtractTokenMiddleware().getRequestHandler());

        this.expressApp.use('/api', new LoginRouter(new LoginFacade(new UserDataMapper())).getRouter());
        this.expressApp.use('/api', new EventRouter(eventFacade).getRouter());
        this.expressApp.use('/api', new PictureRouter(pictureFacade).getRouter());


    }
}