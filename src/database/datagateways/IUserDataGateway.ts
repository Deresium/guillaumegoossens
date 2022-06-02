import UserEntity from "../entities/UserEntity";

export default interface IUserDataGateway{
    getUserByGoogleId(googleId: string): Promise<UserEntity>;
    createGoogleUser(name: string, email: string, googleId: string): Promise<UserEntity>;
}