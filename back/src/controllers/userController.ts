import { Request, Response } from "express";
import { createUsersService, getUserService, getUsersService, loginUsersService } from "../services/users/userServices";
import IUser from "../interfaces/IUser";
import { UserEntity } from "../entities/UserEntity";
import { UserAuthResponseDTO, UserResponseDTO } from "../DTO/userDTO";

export const getUsers = async (req: Request, res: Response)=>{
    const users:UserEntity[] = await getUsersService();
    res.send(users);
}

export const getUser = async (req: Request, res: Response)=>{
    const user:UserEntity | null = await getUserService(+req.params.id);
    if (user) return res.send(user);
    return res.status(404).send('User not found');
}

export const createUsers = async (req: Request, res: Response)=>{
    const { name, email, birthdate, nDni, username, password } = req.body;
    //checamos si estan los datos
    if (!name || !email || !birthdate || !nDni || !username || !password) {
        return res.status(400).send("Missing required fields");
    }

    try {
        const newUser:UserResponseDTO = await createUsersService(req.body);
        return res.send(newUser);        
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
}

export const loginUsers = async (req: Request, res: Response)=>{
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send("Missing required fields");
        }
        const userAuthed:UserAuthResponseDTO | null = await loginUsersService(username, password);
        if (userAuthed) return res.send(userAuthed);
        return res.status(400).send("Login failed");
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
}