import { Request } from "express"
import AppointmentDTO from "../DTO/appointmentDTO";
import { getUserService } from "./userServices";
import { AppDataSource } from "../config/data-source";
import { AppointmentEntity, StatusEnum } from "../entities/AppointmentEntity";
import { UserEntity } from "../entities/UserEntity";

export const AppointmentModel = AppDataSource.getRepository(AppointmentEntity);

export const getAppointmentsService = async ():Promise<AppointmentEntity[]>=>{
    const appointments:AppointmentEntity[] = await AppointmentModel.find();
    return appointments;
}

export const getAppointmentService = async (id:number):Promise<AppointmentEntity | null>=>{
    const appointmentFound: AppointmentEntity | null = await AppointmentModel.findOneBy({id});
    return appointmentFound;
}

export const scheduleAppointmentsService = async (appData:AppointmentDTO):Promise<AppointmentEntity | null>=>{
    const userFound:UserEntity | null = await getUserService(appData.userId);
    if (userFound) {
        const newApp: AppointmentEntity = AppointmentModel.create({
            date: appData.date,
            time: appData.time,
            status: StatusEnum.ACTIVO,
            user:userFound
        });
        await AppointmentModel.save(newApp);
        return newApp;
    }
    return null;
}

export const cancelAppointmentsService = async (id:number):Promise<string | undefined>=>{
    const foundApp: AppointmentEntity | null = await AppointmentModel.findOneBy({id});
    if (foundApp) {
        foundApp.status = StatusEnum.CANCELADO;
        await AppointmentModel.save(foundApp);
        return "Cancelado"
    }
    return undefined
}