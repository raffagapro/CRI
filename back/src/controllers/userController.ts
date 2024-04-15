import { Request, Response } from "express";
import { createUsersService, getUserService, getUsersService, loginUsersService } from "../services/users/userServices";
import IUser from "../interfaces/IUser";
import { UserEntity } from "../entities/UserEntity";
import { UserResponseDTO } from "../DTO/userDTO";

export const getUsers = async (req: Request, res: Response)=>{
    const users:UserEntity[] = await getUsersService();
    res.send(users);
}

export const getUser = async (req: Request, res: Response)=>{
    const user:UserEntity | null = await getUserService(+req.params.id);
    res.send(user);
}

export const createUsers = async (req: Request, res: Response)=>{
    const newUser:UserResponseDTO = await createUsersService(req.body);
    res.send(newUser);
}

export const loginUsers = async (req: Request, res: Response)=>{
    const message:string = await loginUsersService();
    res.send(message);
}