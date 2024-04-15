"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const AppointmentEntity_1 = require("../entities/AppointmentEntity");
const AppointmentRepository = data_source_1.AppDataSource.getRepository(AppointmentEntity_1.AppointmentEntity);
exports.default = AppointmentRepository;
