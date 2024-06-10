import { Request, Response } from "express"
import { getUsersService, getUserService, createUsersService } from "../services/userServices";
import { UserEntity } from "../entities/UserEntity";
import UserDTO, { UserResponseDTO } from "../DTO/userDTO";

export const getUsers = async (req: Request, res: Response) =>{
    const users:UserEntity[] = await getUsersService();
    //invocar varios servicios
    res.send(users);
}

export const getUser = async (req: Request, res: Response) =>{
    const { id } = req.params; 
    const user:UserEntity | null = await getUserService(Number(id));
    res.send(user);
}

export const createUsers = async (req: Request, res: Response) =>{
    const userData: UserDTO = req.body;
    const newUser:UserResponseDTO = await createUsersService(userData);
    res.send(newUser);
}