import { useState } from "react";
import Turno from "../Turno/Turno";
import misTurnos from '../../helpers/misTurnos';

/* eslint-disable react/prop-types */
const Turnos = ({userID})=>{
    const [turnos, setTurnos] = useState(misTurnos);

    //recibir id
    //filtrar turnos

    return(
        <div>
            {turnos.map((turno)=><Turno key={turno.id} data={turno}/>)}
        </div>
    )
}

export default Turnos;