import IDatabaseConnectionGateway from "../datagateways/IDatabaseConnectionGateway";
import DatabaseSingleton from "../DatabaseSingleton";

export default class DatabaseConnectionMapper implements IDatabaseConnectionGateway{
    async testConnect() {
        await DatabaseSingleton.getInstance().testConnect();
    }

}