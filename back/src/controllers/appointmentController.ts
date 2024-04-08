import { Request, Response } from "express";
import { cancelAppointmentsService, getAppointmentService, getAppointmentsService, scheduleAppointmentsService } from "../services/appointment/appointmentServices";


export const getAppointments = async (req: Request, res: Response)=>{
    const message:string = await getAppointmentsService();
    res.send(message);
}

export const getAppointment = async (req: Request, res: Response)=>{
    const message:string = await getAppointmentService();
    res.send(message);
}

export const scheduleAppointment = async (req: Request, res: Response)=>{
    const message:string = await scheduleAppointmentsService();
    res.send(message);
}

export const cancelAppointment = async (req: Request, res: Response)=>{
    const message:string = await cancelAppointmentsService();
    res.send(message);
}