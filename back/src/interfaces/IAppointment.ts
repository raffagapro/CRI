interface IAppointment {
    id:number;
    date:Date;
    time:Date;
    userId:number;
    status:StatusEnum;
}

export enum StatusEnum{
    ACTIVO='activo',
    CANCELADO='cancelado'
}

export default IAppointment;