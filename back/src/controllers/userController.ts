import { Request, Response } from "express"
import { getUsersService, getUserService, createUsersService, loginUsersService } from "../services/userServices";
import { UserEntity } from "../entities/UserEntity";
import { UserResponseDTO, UserAuthResponseDTO } from "../DTO/userDTO";

export const getUsers = async (req: Request, res: Response) =>{
    const users:UserEntity[] = await getUsersService();
    //invocar varios servicios
    res.send(users);
}

export const getUser = async (req: Request, res: Response) =>{
    const { id } = req.params; 
    const user:UserEntity | null = await getUserService(Number(id));
    if (user) return res.send(user);
    return res.status(404).send('User not found');
}

export const createUsers = async (req: Request, res: Response) =>{
    const { name, email, birthdate, nDni, username, password } = req.body;
    if (!name || !email || !birthdate || !nDni || !username || !password){
        return res.status(400).send("Missing required fields");
    }
    try {
        const newUser:UserResponseDTO = await createUsersService(req.body);
        return res.status(201).send(newUser);
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