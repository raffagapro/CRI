"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
const appointmentRouter = (0, express_1.Router)();
//CRUD
//Obtener el listado de todos los turnos de todos los usuarios.
appointmentRouter.get('/appointments', appointmentController_1.getAppointments);
//Obtener el detalle de un turno específico.
//id por query
appointmentRouter.get('/appointment', appointmentController_1.getAppointment);
//Agendar un nuevo turno.
appointmentRouter.post('/appointment/schedule', appointmentController_1.scheduleAppointment);
//Cambiar el estatus de un turno a “cancelled”.
appointmentRouter.put('/appointment/cancelar', appointmentController_1.cancelAppointment);
exports.default = appointmentRouter;
