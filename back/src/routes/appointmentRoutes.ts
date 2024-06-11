import { Router } from "express";
import { cancelAppointments, getAppointment, getAppointments, scheduleAppointments } from "../controllers/appointmentController";

const appointmentRouter:Router = Router();

//get all apps
appointmentRouter.get('/appointments', getAppointments);
//get 1 app
appointmentRouter.get('/appointment/:id', getAppointment);
//shcedule apps
appointmentRouter.post('/appointment/schedule', scheduleAppointments);
//cancel apps
appointmentRouter.put('/appointment/cancelar/:id', cancelAppointments);

export default appointmentRouter;