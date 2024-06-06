import { Request, Response } from "express"
import { getUsersService, getUserService, createUsersService } from "../services/userServices";
import IUser from "../interfaces/IUser";
import UserDTO from "../DTO/userDTO";

export const getUsers = async (req: Request, res: Response) =>{
    const users:IUser[] = await getUsersService();
    //invocar varios servicios
    res.send(users);
}

export const getUser = async (req: Request, res: Response) =>{
    const { id } = req.query;   
    const user:IUser | undefined = await getUserService(Number(id));
    res.send(user);
}

export const createUsers = async (req: Request, res: Response) =>{
    const userData: UserDTO = req.body;
    const newUser:IUser = await createUsersService(userData);
    res.send(newUser);
}