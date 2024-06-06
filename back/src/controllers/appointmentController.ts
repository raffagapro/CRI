import { Request, Response } from "express"
import { cancelAppointmentsService, getAppointmentService, getAppointmentsService, scheduleAppointmentsService } from "../services/appointmentServices"
import IAppointment from "../interfaces/IAppointment";
import AppointmentDTO from "../DTO/appointmentDTO";

export const getAppointments = async(req:Request, res:Response)=>{
    const appointments:IAppointment[] = await getAppointmentsService();
    res.send(appointments)
}

export const getAppointment = async(req:Request, res:Response)=>{
    const foundApp:IAppointment | undefined = await getAppointmentService(req);
    res.send(foundApp)
}

export const scheduleAppointments = async(req:Request, res:Response)=>{
    const appData:AppointmentDTO = req.body;
    const newApp:IAppointment = await scheduleAppointmentsService(appData);
    res.send(newApp)
}

export const cancelAppointments = async(req:Request, res:Response)=>{
 const id = Number(req.body.id)
    const message:string | undefined = await cancelAppointmentsService(id);
    res.send(message)
}