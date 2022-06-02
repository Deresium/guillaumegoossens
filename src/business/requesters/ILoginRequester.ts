import LoginRequesterDS from "../models/login/LoginRequesterDS";
import UserVM from "../models/viewmodels/UserVM";

export default interface ILoginRequester{
    login(loginRequesterDS: LoginRequesterDS): Promise<UserVM>;
}