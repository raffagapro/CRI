export const getAppointmentsService = async ():Promise<string>=>{
    return "Obtener el listado de todos los turnos de todos los usuarios"
}

export const getAppointmentService = async ():Promise<string>=>{
    return "Obtener el detalle de un turno específico."
}

export const scheduleAppointmentsService = async ():Promise<string>=>{
    return "Agendar un nuevo turno."
}

export const cancelAppointmentsService = async ():Promise<string>=>{
    return "Cambiar el estatus de un turno a “cancelled”."
}