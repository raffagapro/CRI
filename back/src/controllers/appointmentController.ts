import { Request, Response } from "express"
import { cancelAppointmentsService, getAppointmentService, getAppointmentsService, scheduleAppointmentsService } from "../services/appointmentServices"

export const getAppointments = async(req:Request, res:Response)=>{
    const message:string = await getAppointmentsService();
    res.send(message)
}

export const getAppointment = async(req:Request, res:Response)=>{
    const message:string = await getAppointmentService(req);
    res.send(message)
}

export const scheduleAppointments = async(req:Request, res:Response)=>{
    const message:string = await scheduleAppointmentsService();
    res.send(message)
}

export const cancelAppointments = async(req:Request, res:Response)=>{
    const message:string = await cancelAppointmentsService();
    res.send(message)
}