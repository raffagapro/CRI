import { AppDataSource } from "../config/data-source";
import { AppointmentEntity } from "../entities/AppointmentEntity";

const AppointmentRespository = AppDataSource.getRepository(AppointmentEntity);

export default AppointmentRespository;