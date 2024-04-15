import { AppDataSource } from "../config/data-source";
import { CredentialEntity } from "../entities/CredentialEntity";

const CredentialRepository = AppDataSource.getRepository(CredentialEntity);

export default CredentialRepository;