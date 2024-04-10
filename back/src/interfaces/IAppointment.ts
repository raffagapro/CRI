interface IAppointment {
    id:number;
    date:Date;
    time:Date;
    userId:number;
    status:StatusEnum;
}

export enum StatusEnum{
    ACTIVO='active',
    CANCELADO='cancel'
}

export default IAppointment;
