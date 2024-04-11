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
exports.CredentialModel = exports.CredentialEntity = void 0;
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("./UserEntity");
const data_source_1 = require("../config/data-source");
let CredentialEntity = class CredentialEntity {
};
exports.CredentialEntity = CredentialEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CredentialEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CredentialEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CredentialEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => UserEntity_1.UserEntity, user => user.credential),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", UserEntity_1.UserEntity)
], CredentialEntity.prototype, "user", void 0);
exports.CredentialEntity = CredentialEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: "credentials" //explicitamente indicando el nombre de la tabla
    })
], CredentialEntity);
exports.CredentialModel = data_source_1.AppDataSource.getRepository(CredentialEntity);
