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
exports.UserModel = exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const data_source_1 = require("../config/data-source");
const CredentialEntity_1 = require("./CredentialEntity");
const AppointmentEntity_1 = require("./AppointmentEntity");
let UserEntity = class UserEntity {
};
exports.UserEntity = UserEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], UserEntity.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "nDni", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => CredentialEntity_1.CredentialEntity, cred => cred.user),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", CredentialEntity_1.CredentialEntity)
], UserEntity.prototype, "credential", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => AppointmentEntity_1.AppointmentEntity, app => app.user) // corresponde con la columna creada en appointmentEntity
    ,
    __metadata("design:type", Array)
], UserEntity.prototype, "appointments", void 0);
exports.UserEntity = UserEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: "users" //explicitamente indicando el nombre de la tabla
    })
], UserEntity);
exports.UserModel = data_source_1.AppDataSource.getRepository(UserEntity);
