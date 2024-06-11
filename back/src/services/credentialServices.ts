import { AppDataSource } from "../config/data-source";
import { CredentialEntity } from "../entities/CredentialEntity";
import { UserAuthResponseDTO } from '../DTO/userDTO';

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

export const verifyUserCredentials = async (username:string, password:string):Promise<UserAuthResponseDTO | null>=>{
    //buscamos al user con el username
    const foundUserCredentials:CredentialEntity | null = await CredentialModel.findOne({
        where:{ username },
        relations:{ user:true}
    })
    console.log(foundUserCredentials);
    
    //revisamos si encontramos algo
    if (foundUserCredentials) {
        if (foundUserCredentials.password === password) return {
            login:true,
            user:{
                id: foundUserCredentials.user.id,
                name: foundUserCredentials.user.name,
                email: foundUserCredentials.user.email,
                birthdate: foundUserCredentials.user.birthdate,
                nDni: foundUserCredentials.user.nDni
            }
        }
    }
    return null;
}