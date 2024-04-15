import { AppDataSource } from "../config/data-source";
import { AppointmentEntity } from "../entities/AppointmentEntity";

const AppointmentRepository = AppDataSource.getRepository(AppointmentEntity);
export default AppointmentRepository;