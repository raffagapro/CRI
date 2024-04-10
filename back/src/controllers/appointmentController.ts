import { Request, Response } from "express";
import { cancelAppointmentsService, getAppointmentService, getAppointmentsService, scheduleAppointmentsService } from "../services/appointment/appointmentServices";
import IAppointment from "../interfaces/IAppointment";


export const getAppointments = async (req: Request, res: Response)=>{
    const appointments:IAppointment[] = await getAppointmentsService();
    res.send(appointments);
}

export const getAppointment = async (req: Request, res: Response)=>{
    const appointment:IAppointment | undefined = await getAppointmentService(+req.params.id);
    res.send(appointment);
}

export const scheduleAppointment = async (req: Request, res: Response)=>{
    const newAppointment:IAppointment | null = await scheduleAppointmentsService(req.body);
    res.send(newAppointment);
}

export const cancelAppointment = async (req: Request, res: Response)=>{
    const message:string | null = await cancelAppointmentsService(req.body.id);
    res.send(message);
}