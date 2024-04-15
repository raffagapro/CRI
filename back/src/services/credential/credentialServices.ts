import { AppDataSource } from "../../config/data-source";
import { CrendentialEntity } from "../../entities/CredentialEntity";
import ICredential from "../../interfaces/ICredential";

//emulacion de info en DB
// const Creds:ICredential[] = [];
// let id:number = 0;
export const CredentialModel = AppDataSource.getRepository(CrendentialEntity);

export const createUserCredentials = async (username:string, password:string):Promise<CrendentialEntity>=>{
    //crea new creds
    const newCreds:CrendentialEntity= CredentialModel.create({
        username,
        password
    });
    await CredentialModel.save(newCreds);
    return newCreds;
}

export const verifyUserCredentials = async (username:string, password:string):Promise<number | null>=>{
    //buscamos al user con el username
    const foundUserCredentials:CrendentialEntity | null = await CredentialModel.findOne({
        where:{ username}
    })
    //revisamos si encontramos algo
    if (foundUserCredentials) {
        if (foundUserCredentials.password === password) return foundUserCredentials.user.id;
    }
    return null;
}