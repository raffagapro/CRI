export interface UserResponseDTO {
    id:number;
    name:string;
    email:string;
    birthdate:Date;
    nDni:string;
    credentialsId:number;
}

interface UserDTO {
    name:string;
    email:string;
    birthdate:Date;
    nDni:string;
    username:string;
    password:string;
}

export default UserDTO;