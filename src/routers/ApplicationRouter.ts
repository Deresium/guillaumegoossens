import {Router} from "express";

export default abstract class ApplicationRouter{
    private readonly router;

    protected constructor() {
        this.router = Router();
        this.initRoutes();
    }

    getRouter(){
        return this.router;
    }

    abstract initRoutes(): void;
}