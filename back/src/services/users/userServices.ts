import UserDTO, { UserResponseDTO } from "../../DTO/userDTO";
import { CredentialEntity } from "../../entities/CredentialEntity";
import { UserEntity } from "../../entities/UserEntity";
import CredentialRepository from "../../repositories/credentialRepository";
import UserRepository from "../../repositories/userRepository";
import { createUserCredentials, verifyUserCredentials } from "../credential/credentialServices";

export const getUsersService = async ():Promise<UserEntity[]> =>{
    const users = await UserRepository.find({
        relations:{ 
            appointments:true
        }
    });
    return users;
}

export const getUserService = async (id:number):Promise<UserEntity | null> =>{
    return await UserRepository.findOne({
        where: { id },
        relations:["appointments"]
    });
}

export const createUsersService = async (userData:UserDTO):Promise<UserResponseDTO>=>{
    const newCredsID:CredentialEntity = await createUserCredentials(userData.username, userData.password);
    const newUser:UserEntity =  await UserRepository.create(userData);
    newUser.credential = newCredsID;
    newCredsID.user = newUser;
    await UserRepository.save(newUser);
    await CredentialRepository.save(newCredsID);
    return {
        id:newUser.id,
        name:newUser.name,
        email:newUser.email,
        birthdate:newUser.birthdate,
        nDni:newUser.nDni,
        credentialsId:newUser.credential.id,
        login:false
    };
}

export const loginUsersService = async (username:string, password:string):Promise<UserResponseDTO | null>=>{
    return verifyUserCredentials(username, password);
}