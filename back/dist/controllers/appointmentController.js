"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.scheduleAppointment = exports.getAppointment = exports.getAppointments = void 0;
const appointmentServices_1 = require("../services/appointment/appointmentServices");
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield (0, appointmentServices_1.getAppointmentsService)();
    res.send(appointments);
});
exports.getAppointments = getAppointments;
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.query.id) {
        const appointment = yield (0, appointmentServices_1.getAppointmentService)(+req.query.id);
        return res.send(appointment);
    }
    res.status(400).send({ message: `missing id` });
});
exports.getAppointment = getAppointment;
const scheduleAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = yield (0, appointmentServices_1.scheduleAppointmentsService)(req.body);
    res.send(newAppointment);
});
exports.scheduleAppointment = scheduleAppointment;
const cancelAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield (0, appointmentServices_1.cancelAppointmentsService)(req.body.id);
    res.send(message);
});
exports.cancelAppointment = cancelAppointment;
