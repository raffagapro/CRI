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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentsService = exports.scheduleAppointmentsService = exports.getAppointmentService = exports.getAppointmentsService = void 0;
const AppointmentEntity_1 = require("../../entities/AppointmentEntity");
const appointmentServices_1 = __importDefault(require("../../repositories/appointmentServices"));
const userServices_1 = require("../users/userServices");
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = appointmentServices_1.default.find({
        relations: { user: true }
    });
    return appointments;
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return appointmentServices_1.default.findOne({
        relations: { user: true },
        where: { id }
    });
});
exports.getAppointmentService = getAppointmentService;
const scheduleAppointmentsService = (appData) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield (0, userServices_1.getUserService)(appData.userId);
    if (userFound) {
        const newAppointment = appointmentServices_1.default.create({
            date: appData.date,
            time: appData.time,
            status: AppointmentEntity_1.StatusEnum.ACTIVO,
            user: userFound
        });
        yield appointmentServices_1.default.save(newAppointment);
        return newAppointment;
    }
    return null;
});
exports.scheduleAppointmentsService = scheduleAppointmentsService;
const cancelAppointmentsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundApp = yield (0, exports.getAppointmentService)(id);
    if (foundApp) { //memoria 1
        foundApp.status = AppointmentEntity_1.StatusEnum.CANCELADO;
        return "Cancelado";
    }
    return null;
});
exports.cancelAppointmentsService = cancelAppointmentsService;
