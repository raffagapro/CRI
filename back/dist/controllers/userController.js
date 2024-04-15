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
    res.send(user);
});
exports.getUser = getUser;
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield (0, userServices_1.createUsersService)(req.body);
    res.send(newUser);
});
exports.createUsers = createUsers;
const loginUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield (0, userServices_1.loginUsersService)();
    res.send(message);
});
exports.loginUsers = loginUsers;
