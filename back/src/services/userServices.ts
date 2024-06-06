import { Request } from "express"
import IUser from "../interfaces/IUser"
import ICredential from "../interfaces/ICredential";
import UserDTO from "../DTO/userDTO";
import { createUserCredentials } from "./credentialServices";

//DB falsa
const users:IUser[] = [];
let id = 0;

export const getUsersService = async ():Promise<IUser[]>=>{
    return users;
}

export const getUserService = async (id: number):Promise<IUser | undefined>=>{
    return users.find((user:IUser)=>user.id === Number(id));
}

export const createUsersService = async (userData: UserDTO):Promise<IUser>=>{
    //servicio para crear IDs
    const newUserCredsId: number = await createUserCredentials(userData.username, userData.password);
    const newUser : IUser ={
        id,
        name: userData.name,
        email: userData.email,
        birthdate:userData.birthdate,
        nDni:userData.nDni,
        credentialsId: newUserCredsId
    }
    id++;
    //servicio para crea creds
    //servicio al que le mandes la credencial creada y en base a eso crea el usuario
    return newUser;
}