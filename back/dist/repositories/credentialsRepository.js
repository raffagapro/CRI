"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const CredentialEntity_1 = require("../entities/CredentialEntity");
const CredentialRespository = data_source_1.AppDataSource.getRepository(CredentialEntity_1.CrendentialEntity);
exports.default = CredentialRespository;
