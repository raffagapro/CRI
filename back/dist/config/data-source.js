"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const UserEntity_1 = require("../entities/UserEntity");
const AppointmentEntity_1 = require("../entities/AppointmentEntity");
const CredentialEntity_1 = require("../entities/CredentialEntity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    //recrea las tables con el levantamiento
    dropSchema: true,
    synchronize: true,
    logging: ["error"],
    //modelos creados
    entities: [UserEntity_1.UserEntity, AppointmentEntity_1.AppointmentEntity, CredentialEntity_1.CredentialEntity],
    subscribers: [],
    migrations: [],
});
