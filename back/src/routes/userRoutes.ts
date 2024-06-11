import { Router } from "express";
import { createUsers, getUser, getUsers, loginUsers } from "../controllers/userController";

const userRouter:Router = Router();

//CRUD
//CREAR
userRouter.post('/users/register', createUsers);
userRouter.post('/users/login', loginUsers);
//LEER (READ)
userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
//UPDATE
//DELETE

export default userRouter;