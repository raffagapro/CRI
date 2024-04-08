import { Router } from "express";
import { createUsers, getUser, getUsers, loginUsers } from "../controllers/userController";

const userRouter:Router = Router();

//CRUD
//Obtener el listado de todos los usuarios.
userRouter.get('/users', getUsers);
//Obtener el detalle de un usuario específico.
//se pasa por parametros!!
userRouter.get('/users/:id', getUser);
//Registro de un nuevo usuario.
userRouter.post('/users/register', createUsers);
//Login del usuario a la aplicación.
userRouter.post('/users/login', loginUsers);


export default userRouter;