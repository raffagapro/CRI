import AppointmentDTO from "../../DTO/appointmentDTO";
import IAppointment, { StatusEnum } from "../../interfaces/IAppointment";

//DB falsa
const appointments:IAppointment[] =[]
let id = 0;

export const getAppointmentsService = async ():Promise<IAppointment[]>=>{
    return appointments;
}

export const getAppointmentService = async (id:number):Promise<IAppointment| undefined>=>{
    return appointments.find((appointments:IAppointment)=>appointments.id === id);
}

export const scheduleAppointmentsService = async (appData:AppointmentDTO):Promise<IAppointment | null>=>{
    if (appData.userId || appData.userId === 0) {
        const newAppointment:IAppointment = {
            id,
            date: appData.date,
            time: appData.time,
            userId: appData.userId,
            status:StatusEnum.ACTIVO
        }
        id++;
        appointments.push(newAppointment);
        return newAppointment;
    }
    return null;
}

export const cancelAppointmentsService = async (id:number):Promise<string | null>=>{
    const foundApp:IAppointment | undefined = appointments.find((appointments:IAppointment)=>appointments.id === id);
    if (foundApp) { //memoria 1
        foundApp.status = StatusEnum.CANCELADO;
        return "Cancelado"
    }
    return null
}