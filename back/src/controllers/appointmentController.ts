import { Request, Response } from "express";
import { cancelAppointmentsService, getAppointmentService, getAppointmentsService, scheduleAppointmentsService } from "../services/appointment/appointmentServices";
import { AppointmentEntity } from "../entities/AppointmentEntity";


export const getAppointments = async (req: Request, res: Response)=>{
    const appointments:AppointmentEntity[] = await getAppointmentsService();
    if (appointments.length > 0) return res.send(appointments);
    return res.status(404).send({message:`There are no turns scheduled.`});
}

export const getAppointment = async (req: Request, res: Response)=>{
    try {
        if (req.query.id) {
            const appointment:AppointmentEntity | null = await getAppointmentService(+req.query.id);
            if (appointment) return res.send(appointment);
            return res.status(400).send("Appointment not found!");
        }
        res.status(400).send({message:`missing id`}); 
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    } 
}

export const scheduleAppointment = async (req: Request, res: Response)=>{
    try {
        const { date, time, userId } = req.body;
        if (!date || !time || !userId) return res.status(400).send("Missing required fields");
        const newAppointment:AppointmentEntity | null = await scheduleAppointmentsService(req.body);
        if (newAppointment) return res.send(newAppointment);   
        res.status(400).send("Missing required fields");
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
}

export const cancelAppointment = async (req: Request, res: Response)=>{
    try {
        if (req.params.id) {
            const appCancelled:number | null = await cancelAppointmentsService(Number(req.params.id));
            if (appCancelled) return res.send({message:'Appointment was cancelled'});
        }
        res.status(404).send({message:`Appointment not found`});
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
    
}