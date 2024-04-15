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
exports.loginUsersService = exports.createUsersService = exports.getUserService = exports.getUsersService = exports.UserModel = void 0;
const data_source_1 = require("../../config/data-source");
const UserEntity_1 = require("../../entities/UserEntity");
const credentialServices_1 = require("../credential/credentialServices");
//DB falsa
// const users:IUser[] =[]
// let id = 0;
exports.UserModel = data_source_1.AppDataSource.getRepository(UserEntity_1.UserEntity);
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield exports.UserModel.find();
    return users;
});
exports.getUsersService = getUsersService;
const getUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield exports.UserModel.findOneBy({ id });
});
exports.getUserService = getUserService;
const createUsersService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredsID = yield (0, credentialServices_1.createUserCredentials)(userData.username, userData.password);
    const newUser = yield exports.UserModel.create(userData);
    newUser.credential = newCredsID;
    newCredsID.user = newUser;
    exports.UserModel.save(newUser);
    return newUser;
});
exports.createUsersService = createUsersService;
const loginUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return "Login del usuario a la aplicación.";
});
exports.loginUsersService = loginUsersService;
