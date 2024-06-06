import ICredential from "../interfaces/ICredential"

//DB falsa
const Creds:ICredential[] = [];
let id = 0;

export const createUserCredentials = async (username:string, password:string):Promise<number>=>{
    //crear nueva cred
    const newUserCreds:ICredential={
        id,
        username,
        password
    }
    //guardar la credencial
    Creds.push(newUserCreds);
    id++;
    return newUserCreds.id;
}