import { Request } from "express"

export const getAppointmentsService = async ():Promise<string>=>{
    return "Obtener el listado de todos los turnos de todos los Apps"
}

export const getAppointmentService = async (req:Request):Promise<string>=>{
    const { id } = req.query
    return `Obtener el detalle de un turno(${id}) específico.`
}

export const scheduleAppointmentsService = async ():Promise<string>=>{
    return "Agendar un nuevo turno."
}

export const cancelAppointmentsService = async ():Promise<string>=>{
    return "Cambiar el estatus de un turno a “cancelled”."
}