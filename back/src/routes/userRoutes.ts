import { Router } from "express";
import { createUsers, getUser, getUsers } from "../controllers/userController";

const userRouter:Router = Router();

//CRUD
//CREAR
userRouter.post('/users/register', createUsers);
//LEER (READ)
userRouter.get('/users', getUsers);
userRouter.get('/users/:id', getUser);
//UPDATE
//DELETE
// userRouter.get('/users/login', getUser);

export default userRouter;