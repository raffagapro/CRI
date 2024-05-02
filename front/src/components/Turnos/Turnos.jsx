import { useEffect, useState } from "react";
import Turno from "../Turno/Turno";
import axios from 'axios';

/* eslint-disable react/prop-types */
const Turnos = ({userId})=>{
    const [turnos, setTurnos] = useState([]);
    const [user, setUser] = useState({});

    useEffect(()=>{
        const url = `http://localhost:3000/users/${userId}`;
        axios.get(url).then(resp=>{
            setTurnos(resp.data.appointments);
            setUser(resp.data);
        });
        // setTurnosState(turnos);
    }, []);

    //recibir id
    //filtrar turnos

    return(
        <div>
            {turnos?.map((turno)=><Turno key={turno.id} data={turno} fName={user.name}/>)}
        </div>
    )
}

export default Turnos;