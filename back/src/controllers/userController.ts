import { Request, Response } from "express";
import { createUsersService, getUserService, getUsersService, loginUsersService } from "../services/users/userServices";

export const getUsers = async (req: Request, res: Response)=>{
    const message:string = await getUsersService();
    res.send(message);
}

export const getUser = async (req: Request, res: Response)=>{
    const message:string = await getUserService();
    res.send(message);
}

export const createUsers = async (req: Request, res: Response)=>{
    const message:string = await createUsersService();
    res.send(message);
}

export const loginUsers = async (req: Request, res: Response)=>{
    const message:string = await loginUsersService();
    res.send(message);
}