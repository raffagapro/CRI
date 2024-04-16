import { AppDataSource } from "../config/data-source";
import { CrendentialEntity } from "../entities/CredentialEntity";

const CredentialRespository = AppDataSource.getRepository(CrendentialEntity);

export default CredentialRespository;