"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEnum = exports.AppointmentEntity = void 0;
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("./UserEntity");
let AppointmentEntity = class AppointmentEntity {
};
exports.AppointmentEntity = AppointmentEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AppointmentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], AppointmentEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], AppointmentEntity.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserEntity_1.UserEntity, (user) => user.appointments) //<--indica en que columna guarda la FK
    ,
    __metadata("design:type", UserEntity_1.UserEntity)
], AppointmentEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AppointmentEntity.prototype, "status", void 0);
exports.AppointmentEntity = AppointmentEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: "appointments" //explicitamente indicando el nombre de la tabla
    })
], AppointmentEntity);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["ACTIVO"] = "active";
    StatusEnum["CANCELADO"] = "cancel";
})(StatusEnum || (exports.StatusEnum = StatusEnum = {}));
