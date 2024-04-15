"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
//CRUD
//Obtener el listado de todos los usuarios.
userRouter.get('/users', userController_1.getUsers);
//Obtener el detalle de un usuario específico.
//se pasa por parametros!!
userRouter.get('/users/:id', userController_1.getUser);
//Registro de un nuevo usuario.
userRouter.post('/users/register', userController_1.createUsers);
//Login del usuario a la aplicación.
userRouter.post('/users/login', userController_1.loginUsers);
exports.default = userRouter;
