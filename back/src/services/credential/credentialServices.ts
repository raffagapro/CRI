import { UserResponseDTO } from "../../DTO/userDTO";
import { CredentialEntity } from "../../entities/CredentialEntity";
import { UserEntity } from "../../entities/UserEntity";
import CredentialRepository from "../../repositories/credentialRepository";

export const createUserCredentials = async (username:string, password:string):Promise<CredentialEntity>=>{
    //crea new creds
    const newCreds:CredentialEntity = CredentialRepository.create({
        username,
        password
    });
    await CredentialRepository.save(newCreds);
    return newCreds;
}

export const verifyUserCredentials = async (username:string, password:string):Promise<UserResponseDTO | null>=>{
    //buscamos al user con el username
    const foundUserCredentials:CredentialEntity | null = await CredentialRepository.findOne({
        where:{ username},
        relations:{ user:true }
    });
    //revisamos si encontramos algo
    if (foundUserCredentials) {
        if (foundUserCredentials.password === password) return {
            ...foundUserCredentials.user,
            login:true,
            credentialsId:foundUserCredentials.id
        };
    }
    return null;
}