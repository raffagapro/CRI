import { Request } from "express"

export const getUsersService = async ():Promise<string>=>{
    return "Obtener el listado de todos los usuarios."
}

export const getUserService = async (req: Request):Promise<string>=>{
    const { id } = req.params;
    console.log(req.query);
    
    return`Obtener el detalle de un usuario específico: ${id}`
}

export const createUsersService = async (req: Request):Promise<string>=>{
    const { userId } = req.body
    //servicio para crea creds
    //servicio al que le mandes la credencial creada y en base a eso crea el usuario
    return `Registro de un nuevo usuario: ${userId}`;
}