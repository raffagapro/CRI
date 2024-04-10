interface IUser {
    id:number;
    name:string;
    email:string;
    birthdate:Date;
    nDni:string;
    credentialsId:number; //otra tabla FK
}

export default IUser;
