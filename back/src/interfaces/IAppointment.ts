import { StatusEnum } from "../entities/AppointmentEntity";

interface IAppointment {
    id:number;
    date:Date;
    time:Date;
    userId:number;
    status:StatusEnum;
}

export default IAppointment;
