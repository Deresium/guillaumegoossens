import UserEntity from "../../../database/entities/UserEntity";

export default interface ILoginStrategy{
    login(): Promise<UserEntity>;
}