import ICredential from "../../interfaces/ICredential";

//emulacion de info en DB
const Creds:ICredential[] = [];
let id:number = 0;

export const createUserCredentials = async (username:string, password:string):Promise<number>=>{
    //crea new creds
    const newCreds:ICredential={
        id,
        username,
        password
    }
    Creds.push(newCreds);
    //incrementar id
    id++;
    return newCreds.id;
}

export const verifyUserCredentials = async (username:string, password:string):Promise<number | null>=>{
    //buscamos al user con el username
    const foundUser:ICredential | undefined = Creds.find((user:ICredential)=>user.username === username );
    //revisamos si encontramos algo
    if (foundUser) {
        if (foundUser.password === password) return foundUser.id;
    }
    return null;
}