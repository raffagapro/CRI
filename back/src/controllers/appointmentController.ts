import { Request, Response } from "express"
import { cancelAppointmentsService, getAppointmentService, getAppointmentsService, scheduleAppointmentsService } from "../services/appointmentServices"
import AppointmentDTO from "../DTO/appointmentDTO";
import { AppointmentEntity } from "../entities/AppointmentEntity";

export const getAppointments = async(req:Request, res:Response)=>{
    const appointments:AppointmentEntity[] = await getAppointmentsService();
    if (appointments.length > 0) return res.send(appointments);
    return res.status(404).send({message:`There are no turns scheduled.`});
}

export const getAppointment = async(req:Request, res:Response)=>{
    try {
        if (req.params.id) {
            const id = Number(req.params.id);
            const foundApp:AppointmentEntity | null = await getAppointmentService(id);
            if (foundApp) return res.send(foundApp);
            return res.status(404).send("Appointment not found!");
        }
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
    
    
}

export const scheduleAppointments = async(req:Request, res:Response)=>{
    try {
        const { date, time, userId } = req.body;
        if (!date || !time || !userId) return res.status(400).send("Missing required fields");
        const newApp:AppointmentEntity | null = await scheduleAppointmentsService(req.body);
        if (newApp) return res.status(201).send(newApp);
        res.status(400).send("Missing required fields");
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }

    
}

export const cancelAppointments = async(req:Request, res:Response)=>{
    try {
        if (req.params.id) {
            const id = Number(req.params.id)
            const message:string | undefined = await cancelAppointmentsService(id);
            if (message) return res.send({message:'Appointment was cancelled'});
        }
        res.status(404).send({message:`Appointment not found`});
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Internal Server Error");
    }
}