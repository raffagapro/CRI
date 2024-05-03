import { useEffect, useState } from "react";
import Turno from "../Turno/Turno";
import axios from 'axios';

/* eslint-disable react/prop-types */
const Turnos = ({userId})=>{
    const [turnos, setTurnos] = useState([]);
    const [user, setUser] = useState({});

    const getApps = (userId)=>{
        const url = `http://localhost:3000/users/${userId}`;
        axios.get(url).then(resp=>{
            setTurnos(resp.data.appointments);
            setUser(resp.data);
        });
    }

    useEffect(()=>{
        getApps(userId)
        // setTurnosState(turnos);
    }, []);

    const onCancelAppointment = (id)=>{
        const url = `http://localhost:3000/appointment/cancelar/${id}`;
        axios.put(url).then(resp=>{
            console.log(resp.data);
            if (resp.data.message === "Appointment was cancelled") getApps(userId);
        })
    }

    return(
        <div>
            {
            turnos?.map((turno)=><Turno 
                key={turno.id} 
                data={turno} 
                fName={user.name} 
                onCancelAppointment={onCancelAppointment}
            />)}
        </div>
    )
}

export default Turnos;