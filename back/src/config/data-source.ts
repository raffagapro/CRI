import { DataSource } from "typeorm"
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs"
import { UserEntity } from "../entities/UserEntity"
import { AppointmentEntity } from "../entities/AppointmentEntity"
import { CredentialEntity } from "../entities/CredentialEntity"
import { error } from "console"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    //recrea las tables con el levantamiento
    dropSchema: true,
    synchronize: true,
    logging: ["error"],
    //modelos creados
    entities: [UserEntity, AppointmentEntity, CredentialEntity],
    subscribers: [],
    migrations: [],
})