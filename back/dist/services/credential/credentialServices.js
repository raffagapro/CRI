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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserCredentials = exports.createUserCredentials = void 0;
const credentialRepository_1 = __importDefault(require("../../repositories/credentialRepository"));
const createUserCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    //crea new creds
    const newCreds = credentialRepository_1.default.create({
        username,
        password
    });
    yield credentialRepository_1.default.save(newCreds);
    return newCreds;
});
exports.createUserCredentials = createUserCredentials;
const verifyUserCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    //buscamos al user con el username
    const foundUserCredentials = yield credentialRepository_1.default.findOne({
        where: { username }
    });
    //revisamos si encontramos algo
    if (foundUserCredentials) {
        if (foundUserCredentials.password === password)
            return foundUserCredentials.user.id;
    }
    return null;
});
exports.verifyUserCredentials = verifyUserCredentials;