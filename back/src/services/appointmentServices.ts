import { Request } from "express"
import IAppointment, { StatusEnum } from "../interfaces/IAppointment"
import AppointmentDTO from "../DTO/appointmentDTO";
import { getUserService } from "./userServices";
import IUser from "../interfaces/IUser";

//DB fake
const appointments:IAppointment[] = [];
let id = 0;

export const getAppointmentsService = async ():Promise<IAppointment[]>=>{
    return appointments;
}

export const getAppointmentService = async (req:Request):Promise<IAppointment | undefined>=>{
    const { id } = req.query
    return appointments.find((app:IAppointment)=>app.id === Number(id));
}

export const scheduleAppointmentsService = async (appData:AppointmentDTO):Promise<IAppointment>=>{
    const userId:number = Number(appData.userId)
    const foundUser:IUser | undefined = await getUserService(userId)
    // if (foundUser) {
        
    // }
    const newApp: IAppointment = {
        id,
        date: appData.date,
        time: appData.time,
        userId: appData.userId,
        status:StatusEnum.ACTIVO
    }
    appointments.push(newApp);
    id++;
    return newApp;
}

export const cancelAppointmentsService = async (id:number):Promise<string | undefined>=>{
    const foundApp: IAppointment | undefined = appointments.find((app:IAppointment)=>app.id === Number(id));
    if (foundApp) {
        foundApp.status = StatusEnum.CANCELADO
        return "Cancelado"
    }
    return undefined
}