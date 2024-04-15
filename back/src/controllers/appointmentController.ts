import { Request, Response } from "express";
import { cancelAppointmentsService, getAppointmentService, getAppointmentsService, scheduleAppointmentsService } from "../services/appointment/appointmentServices";
import IAppointment from "../interfaces/IAppointment";
import { AppointmentEntity } from "../entities/AppointmentEntity";


export const getAppointments = async (req: Request, res: Response)=>{
    const appointments:AppointmentEntity[] = await getAppointmentsService();
    if (appointments.length < 0) return res.send(appointments);
    return res.status(404).send({message:`There are no turns scheduled.`});
    
}

export const getAppointment = async (req: Request, res: Response)=>{
    if (req.query.id) {
        const appointment:AppointmentEntity | null = await getAppointmentService(+req.query.id);
        if (appointment) return res.send(appointment);
        return res.status(404).send({ message: `Appointment not found` }); 
    }
    res.status(400).send({message:`missing id`});
}

export const scheduleAppointment = async (req: Request, res: Response)=>{
    const newAppointment:AppointmentEntity | null = await scheduleAppointmentsService(req.body);
    if (newAppointment) return res.send(newAppointment);
    res.status(400).send({message:`user not found`});
}

export const cancelAppointment = async (req: Request, res: Response)=>{
    if (req.body.id) {
        const appCancelled:number | null = await cancelAppointmentsService(req.body.id);
        if (appCancelled) return res.send({message:'Appointment was cancelled'});
    }
    res.status(404).send({message:`Appointment not found`});
}