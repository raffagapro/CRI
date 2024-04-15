import UserDTO, { UserResponseDTO } from "../../DTO/userDTO";
import { AppDataSource } from "../../config/data-source";
import { CrendentialEntity } from "../../entities/CredentialEntity";
import { UserEntity } from "../../entities/UserEntity";
import ICredential from "../../interfaces/ICredential";
import IUser from "../../interfaces/IUser"
import { createUserCredentials } from "../credential/credentialServices";
//DB falsa
// const users:IUser[] =[]
// let id = 0;

export const UserModel = AppDataSource.getRepository(UserEntity);

export const getUsersService = async ():Promise<UserEntity[]>=>{
    const users: UserEntity[] = await UserModel.find();
    return users;
}

export const getUserService = async (id:number):Promise<UserEntity| null>=>{
    return await UserModel.findOneBy({id});
}

export const createUsersService = async (userData:UserDTO):Promise<UserResponseDTO>=>{
    const newCredsID:CrendentialEntity = await createUserCredentials(userData.username, userData.password);
    const newUser:UserEntity = await UserModel.create(userData); 
    newUser.credential = newCredsID;
    newCredsID.user = newUser;
    UserModel.save(newUser);
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