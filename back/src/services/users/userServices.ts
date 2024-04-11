import UserDTO, { UserResponseDTO } from "../../DTO/userDTO";
import { AppDataSource } from "../../config/data-source";
import { CredentialEntity } from "../../entities/CredentialEntity";
import { UserEntity } from "../../entities/UserEntity";
import { createUserCredentials } from "../credential/credentialServices";

export const UserModel = AppDataSource.getRepository(UserEntity);

export const getUsersService = async ():Promise<UserEntity[]> =>{
    const users = await UserModel.find({
        relations:{ 
            credential:true,
            appointments:true
        }
    });
    return users;
}

export const getUserService = async (id:number):Promise<UserEntity | null> =>{
    return await UserModel.findOneBy({id});
}

export const createUsersService = async (userData:UserDTO):Promise<UserResponseDTO>=>{
    const newCredsID:CredentialEntity = await createUserCredentials(userData.username, userData.password);
    const newUser:UserEntity =  await UserModel.create(userData);
    newUser.credential = newCredsID;
    newCredsID.user = newUser;
    await UserModel.save(newUser);
    return {
        id:newUser.id,
        name:newUser.name,
        email:newUser.email,
        birthdate:newUser.birthdate,
        nDni:newUser.nDni,
        credentialsId:newUser.credential.id,
    };
}

export const loginUsersService = async ():Promise<string>=>{
    return "Login del usuario a la aplicación."
}