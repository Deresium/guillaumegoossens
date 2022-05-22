import {RequestHandler} from "express";
import ApplicationMiddleware from "./ApplicationMiddleware";

export default class AllowLocalhostMiddleware extends ApplicationMiddleware{
    constructor() {
        super();
    }

    defineMiddlewareFunction(): RequestHandler {
        return (req, res, next) => {
            res.header("Access-Control-Allow-Origin", `http://${process.env.DNS_NAME}:8080`);
            res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
            res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Accept, credentials");
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        };
    }
}