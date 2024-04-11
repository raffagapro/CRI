import { AppDataSource } from "../../config/data-source";
import { CredentialEntity } from "../../entities/CredentialEntity";

export const CredentialModel = AppDataSource.getRepository(CredentialEntity);
export const createUserCredentials = async (username:string, password:string):Promise<CredentialEntity>=>{
    //crea new creds
    const newCreds:CredentialEntity = CredentialModel.create({
        username,
        password
    });
    await CredentialModel.save(newCreds);
    return newCreds;
}

export const verifyUserCredentials = async (username:string, password:string):Promise<number | null>=>{
    //buscamos al user con el username
    const foundUserCredentials:CredentialEntity | null = await CredentialModel.findOne({
        where:{ username}
    });
    //revisamos si encontramos algo
    if (foundUserCredentials) {
        if (foundUserCredentials.password === password) return foundUserCredentials.user.id;
    }
    return null;
}