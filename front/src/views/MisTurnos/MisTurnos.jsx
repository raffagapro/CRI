import { useEffect, useState } from 'react';
import misTurnos from '../../helpers/misTurnos';
import Turno from '../../components/Turno/Turno';

const MisTurnos = ()=>{
    const [turnos, setTurnos] = useState([]);

    useEffect(()=>{
        setTurnos(misTurnos)
    }, []);

    return(
        <div>
            {turnos.map((turno)=><Turno key={turno.id} data={turno} />)}
        </div>
    )
}

export default MisTurnos;