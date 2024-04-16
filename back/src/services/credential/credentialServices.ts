import { UserAuthResponseDTO } from "../../DTO/userDTO";
import { CrendentialEntity } from "../../entities/CredentialEntity";
import { UserEntity } from "../../entities/UserEntity";
import CredentialRespository from "../../repositories/credentialsRepository";

export const createUserCredentials = async (username:string, password:string):Promise<CrendentialEntity>=>{
    //crea new creds
    const newCreds:CrendentialEntity= CredentialRespository.create({
        username,
        password
    });
    await CredentialRespository.save(newCreds);
    return newCreds;
}

export const verifyUserCredentials = async (username:string, password:string):Promise<UserAuthResponseDTO | null>=>{
    //buscamos al user con el username
    const foundUserCredentials:CrendentialEntity | null = await CredentialRespository.findOne({
        where:{ username},
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