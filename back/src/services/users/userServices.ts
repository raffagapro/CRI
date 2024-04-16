import UserDTO, { UserAuthResponseDTO, UserResponseDTO } from "../../DTO/userDTO";
import { CrendentialEntity } from "../../entities/CredentialEntity";
import { UserEntity } from "../../entities/UserEntity";
import CredentialRespository from "../../repositories/credentialsRepository";
import UserRepository from "../../repositories/userRepository";
import { createUserCredentials, verifyUserCredentials } from "../credential/credentialServices";

export const getUsersService = async ():Promise<UserEntity[]>=>{
    const users: UserEntity[] = await UserRepository.find();
    return users;
}

export const getUserService = async (id:number):Promise<UserEntity| null>=>{
    return await UserRepository.findOne({
        where:{ id },
        relations:["appointments"]
    });
}

export const createUsersService = async (userData:UserDTO):Promise<UserResponseDTO>=>{
    const newCredsID:CrendentialEntity = await createUserCredentials(userData.username, userData.password);
    const newUser:UserEntity = await UserRepository.create(userData); 
    newUser.credential = newCredsID;
    newCredsID.user = newUser;
    await UserRepository.save(newUser);
    await CredentialRespository.save(newCredsID);
    return {
        id:newUser.id,
        name:newUser.name,
        email:newUser.email,
        birthdate:newUser.birthdate,
        nDni:newUser.nDni,
        credentialsId:newUser.credential.id,
    };
}

export const loginUsersService = async (username:string, password:string):Promise<UserAuthResponseDTO | null>=>{
    //validar la credenciales
    //encontrar al user
    //empaquetar la respuesta
    return await verifyUserCredentials(username, password);
}