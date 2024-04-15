import AppointmentDTO from "../../DTO/appointmentDTO";
import { AppointmentEntity, StatusEnum } from "../../entities/AppointmentEntity";
import { UserEntity } from "../../entities/UserEntity";
import AppointmentRepository from "../../repositories/appointmentRepository";
import { getUserService } from "../users/userServices";

export const getAppointmentsService = async ():Promise<AppointmentEntity[]>=>{
    const appointments = AppointmentRepository.find({
        relations:{ user:true }
    });
    return appointments;
}

export const getAppointmentService = async (id:number):Promise<AppointmentEntity| null>=>{
    return await AppointmentRepository.findOne({
        relations:{ user:true },
        where:{id}
    });
}

export const scheduleAppointmentsService = async (appData:AppointmentDTO):Promise<AppointmentEntity | null>=>{
    const userFound:UserEntity | null = await getUserService(appData.userId);
    if (userFound) {
        const newAppointment:AppointmentEntity = await AppointmentRepository.create({
            date: appData.date,
            time: appData.time,
            status:StatusEnum.ACTIVO,
            user:userFound
        });
        await AppointmentRepository.save(newAppointment);
        return newAppointment;
    }
    return null;
}

export const cancelAppointmentsService = async (id:number):Promise<number | null>=>{
    const foundApp:AppointmentEntity | null = await getAppointmentService(id);
    if (foundApp) { //memoria 1
        foundApp.status = StatusEnum.CANCELADO;
        return foundApp.id
    }
    return null
}