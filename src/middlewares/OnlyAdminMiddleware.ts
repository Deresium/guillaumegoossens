import ApplicationMiddleware from "./ApplicationMiddleware";
import {RequestHandler} from "express";

export default class OnlyAdminMiddleware extends ApplicationMiddleware{
    constructor() {
        super();
    }

    defineMiddlewareFunction(): RequestHandler {
        return (req, res, next) => {
            if(req.userRole === 'ADMIN') {
                next();
                return;
            }
            res.status(400).send('Accès refusé');
        }
    }

}