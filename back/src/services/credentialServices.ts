import { AppDataSource } from "../config/data-source";
import { CredentialEntity } from "../entities/CredentialEntity";

export const CredentialModel = AppDataSource.getRepository(CredentialEntity);

export const createUserCredentials = async (username:string, password:string):Promise<CredentialEntity>=>{
    //crear nueva cred
    const newUserCreds:CredentialEntity = await CredentialModel.create({
        username,
        password
    });
    await CredentialModel.save(newUserCreds);
    return newUserCreds;
}