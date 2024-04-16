"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUsers = exports.createUsers = exports.getUser = exports.getUsers = void 0;
const userServices_1 = require("../services/users/userServices");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userServices_1.getUsersService)();
    res.send(users);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, userServices_1.getUserService)(+req.params.id);
    if (user)
        return res.send(user);
    return res.status(404).send('User not found');
});
exports.getUser = getUser;
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, birthdate, nDni, username, password } = req.body;
    //checamos si estan los datos
    if (!name || !email || !birthdate || !nDni || !username || !password) {
        return res.status(400).send("Missing required fields");
    }
    try {
        const newUser = yield (0, userServices_1.createUsersService)(req.body);
        return res.send(newUser);
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.createUsers = createUsers;
const loginUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send("Missing required fields");
        }
        const userAuthed = yield (0, userServices_1.loginUsersService)(username, password);
        if (userAuthed)
            return res.send(userAuthed);
        return res.status(400).send("Login failed");
    }
    catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
});
exports.loginUsers = loginUsers;
