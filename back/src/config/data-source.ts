import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME, PORT } from "./envs";
import { UserEntity } from "../entities/UserEntity";
import { CrendentialEntity } from "../entities/CredentialEntity";
import { AppointmentEntity } from "../entities/AppointmentEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME, //DB tiene que etsra ya creada
    //recrea las tables con el levantamiento
    dropSchema: true,
    synchronize: true,
    logging: ['error'],
    entities: [UserEntity, CrendentialEntity, AppointmentEntity],
    subscribers: [],
    migrations: [],
})