import { Request } from "express"
import { UserEntity } from "../entities/UserEntity";
import { CredentialEntity } from "../entities/CredentialEntity";
import UserDTO, { UserResponseDTO } from "../DTO/userDTO";
import { CredentialModel, createUserCredentials } from "./credentialServices";
import { AppDataSource } from "../config/data-source";

//patron singleton
export const UserModel = AppDataSource.getRepository(UserEntity);

export const getUsersService = async ():Promise<UserEntity[]>=>{
    //arreglar logica para DB
    const users:UserEntity[] = await UserModel.find();
    return users;
}

export const getUserService = async (id: number):Promise<UserEntity | null>=>{
    //arreglar logica para DB
    const userFound: UserEntity | null = await UserModel.findOneBy({id});
    return userFound;
}

export const createUsersService = async (userData: UserDTO):Promise<UserResponseDTO>=>{
    //servicio para crear IDs
    const newUserCreds: CredentialEntity = await createUserCredentials(userData.username, userData.password);
    //arreglar logica para DB
    const newUser : UserEntity = UserModel.create(userData);
    //hacer las relaciones
    newUser.credential = newUserCreds;
    newUserCreds.user = newUser;
    await UserModel.save(newUser);
    await CredentialModel.save(newUserCreds);
    //servicio para crea creds
    //servicio al que le mandes la credencial creada y en base a eso crea el usuario
    return {
        id:newUser.id,
        name:newUser.name,
        email:newUser.email,
        birthdate:newUser.birthdate,
        nDni:newUser.nDni,
        credentialsId:newUser.credential.id
    };
}