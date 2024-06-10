import { Request, Response } from "express"
import { cancelAppointmentsService, getAppointmentService, getAppointmentsService, scheduleAppointmentsService } from "../services/appointmentServices"
import AppointmentDTO from "../DTO/appointmentDTO";
import { AppointmentEntity } from "../entities/AppointmentEntity";

export const getAppointments = async(req:Request, res:Response)=>{
    const appointments:AppointmentEntity[] = await getAppointmentsService();
    res.send(appointments)
}

export const getAppointment = async(req:Request, res:Response)=>{
    const foundApp:AppointmentEntity | null = await getAppointmentService(req);
    res.send(foundApp)
}

export const scheduleAppointments = async(req:Request, res:Response)=>{
    const appData:AppointmentDTO = req.body;
    const newApp:AppointmentEntity | null = await scheduleAppointmentsService(appData);
    res.send(newApp)
}

export const cancelAppointments = async(req:Request, res:Response)=>{
 const id = Number(req.params.id)
    const message:string | undefined = await cancelAppointmentsService(id);
    res.send(message)
}