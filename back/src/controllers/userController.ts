import { Request, Response } from "express"
import { getUsersService, getUserService, createUsersService } from "../services/userServices";

export const getUsers = async (req: Request, res: Response) =>{
    const message:string = await getUsersService();
    //invocar varios servicios
    res.send(message);
}

export const getUser = async (req: Request, res: Response) =>{    
    const message:string = await getUserService(req);
    res.send(message);
}

export const createUsers = async (req: Request, res: Response) =>{
    const message:string = await createUsersService(req);
    res.send(message);
}