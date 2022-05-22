import express from "express";
import RedirectHttpsMiddleware from "./middlewares/RedirectHttpsMiddleware";
import AllowLocalhostMiddleware from "./middlewares/AllowLocahostMiddleware";
import path from "path";
import ReturnIndexMiddleware from "./middlewares/ReturnIndexMiddleware";
import DatabaseConnectionMapper from "./database/datamappers/DatabaseConnectionMapper";

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

        this.expressApp.use(express.json());

        const databaseConnectionGateway = new DatabaseConnectionMapper();
        databaseConnectionGateway.testConnect();


    }
}