import { Request, Response } from "express";
import { cancelAppointmentsService, getAppointmentService, getAppointmentsService, scheduleAppointmentsService } from "../services/appointment/appointmentServices";
import IAppointment from "../interfaces/IAppointment";
import { AppointmentEntity } from "../entities/AppointmentEntity";


export const getAppointments = async (req: Request, res: Response)=>{
    const appointments:AppointmentEntity[] = await getAppointmentsService();
    res.send(appointments);
}

export const getAppointment = async (req: Request, res: Response)=>{
    if (req.query.id) {
        const appointment:AppointmentEntity | null = await getAppointmentService(+req.query.id);
        return res.send(appointment);
    }
    res.status(400).send({message:`missing id`});
}

export const scheduleAppointment = async (req: Request, res: Response)=>{
    const newAppointment:AppointmentEntity | null = await scheduleAppointmentsService(req.body);
    res.send(newAppointment);
}

export const cancelAppointment = async (req: Request, res: Response)=>{
    const message:string | null = await cancelAppointmentsService(req.body.id);
    res.send(message);
}