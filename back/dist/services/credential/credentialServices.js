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
exports.verifyUserCredentials = exports.createUserCredentials = exports.CredentialModel = void 0;
const data_source_1 = require("../../config/data-source");
const CredentialEntity_1 = require("../../entities/CredentialEntity");
//emulacion de info en DB
// const Creds:ICredential[] = [];
// let id:number = 0;
exports.CredentialModel = data_source_1.AppDataSource.getRepository(CredentialEntity_1.CrendentialEntity);
const createUserCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    //crea new creds
    const newCreds = exports.CredentialModel.create({
        username,
        password
    });
    yield exports.CredentialModel.save(newCreds);
    return newCreds;
});
exports.createUserCredentials = createUserCredentials;
const verifyUserCredentials = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    //buscamos al user con el username
    const foundUserCredentials = yield exports.CredentialModel.findOne({
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
