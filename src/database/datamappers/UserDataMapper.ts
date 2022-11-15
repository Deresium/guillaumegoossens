import IUserDataGateway from "../datagateways/IUserDataGateway";
import UserEntity from "../entities/UserEntity";

export default class UserDataMapper implements IUserDataGateway{
    async createGoogleUser(name: string, email: string, googleId: string): Promise<UserEntity> {
        return await UserEntity.create({
            email,
            googleId,
            name,
            role: 'USER'
        });
    }

    async getUserByGoogleId(googleId: string): Promise<UserEntity> {
        try{
        return await UserEntity.findOne({
            where: {
                googleId
            }
        });
        }catch(error){
           console.log(error);
        }

    }

}