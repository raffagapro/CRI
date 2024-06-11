import { DataSource } from "typeorm"
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } from "./envt";
import { UserEntity } from "../entities/UserEntity";
import { CredentialEntity } from "../entities/CredentialEntity";
import { AppointmentEntity } from "../entities/AppointmentEntity";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME, //DB tiene que estar ya creada
    //recrea las tables con el levantamiento
    //dropSchema: true,
    synchronize: true,
    logging: ['error'],
    entities: [UserEntity, CredentialEntity, AppointmentEntity],
    subscribers: [],
    migrations: [],
});