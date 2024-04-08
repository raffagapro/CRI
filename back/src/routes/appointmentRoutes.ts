import { Router } from "express";
import { cancelAppointment, getAppointment, getAppointments, scheduleAppointment } from "../controllers/appointmentController";

const appointmentRouter:Router = Router();

//CRUD
//Obtener el listado de todos los turnos de todos los usuarios.
appointmentRouter.get('/appointments', getAppointments);
//Obtener el detalle de un turno específico.
//id por query
appointmentRouter.get('/appointment', getAppointment);
//Agendar un nuevo turno.
appointmentRouter.post('/appointment/schedule', scheduleAppointment);
//Cambiar el estatus de un turno a “cancelled”.
appointmentRouter.put('/appointment/cancelar', cancelAppointment);


export default appointmentRouter;