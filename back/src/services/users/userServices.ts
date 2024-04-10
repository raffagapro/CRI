import UserDTO from "../../DTO/userDTO";
import ICredential from "../../interfaces/ICredential";
import IUser from "../../interfaces/IUser"
import { createUserCredentials } from "../credential/credentialServices";
//DB falsa
const users:IUser[] =[]
let id = 0;

export const getUsersService = async ():Promise<IUser[]>=>{
    return users;
}

export const getUserService = async (id:number):Promise<IUser| undefined>=>{
    //buscamos al user con el user
    // const foundUser:IUser | undefined = Users.find((user:IUser)=>user.id === id );
    return users.find((user:IUser)=>user.id === id);
}

export const createUsersService = async (userData:UserDTO):Promise<IUser>=>{
    const newCredsID:number = await createUserCredentials(userData.username, userData.password);
    const newUser:IUser = {
        id,
        name:userData.name,
        email:userData.email,
        birthdate: userData.birthdate,
        nDni: userData.nDni,
        credentialsId:newCredsID
    }
    id++;
    users.push(newUser);
    return newUser;
}

export const loginUsersService = async ():Promise<string>=>{
    return "Login del usuario a la aplicación."
}