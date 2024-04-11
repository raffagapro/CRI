import AppointmentDTO from "../../DTO/appointmentDTO";
import { AppDataSource } from "../../config/data-source";
import { AppointmentEntity, StatusEnum } from "../../entities/AppointmentEntity";
import { UserEntity } from "../../entities/UserEntity";
import { getUserService } from "../users/userServices";

export const AppointmentModel = AppDataSource.getRepository(AppointmentEntity);

export const getAppointmentsService = async ():Promise<AppointmentEntity[]>=>{
    const appointments = AppointmentModel.find({
        relations:{ user:true }
    });
    return appointments;
}

export const getAppointmentService = async (id:number):Promise<AppointmentEntity| null>=>{
    return await AppointmentModel.findOne({
        relations:{ user:true },
        where:{id}
    });
}

export const scheduleAppointmentsService = async (appData:AppointmentDTO):Promise<AppointmentEntity | null>=>{
    const userFound:UserEntity | null = await getUserService(appData.userId);
    if (userFound) {
        const newAppointment:AppointmentEntity = await AppointmentModel.create({
            date: appData.date,
            time: appData.time,
            status:StatusEnum.ACTIVO,
            user:userFound
        });
        await AppointmentModel.save(newAppointment);
        return newAppointment;
    }
    return null;
}

export const cancelAppointmentsService = async (id:number):Promise<string | null>=>{
    const foundApp:AppointmentEntity | null = await getAppointmentService(id);
    if (foundApp) { //memoria 1
        foundApp.status = StatusEnum.CANCELADO;
        return "Cancelado"
    }
    return null
}