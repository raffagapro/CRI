import { useEffect, useState } from "react";
import Turno from "../Turno/Turno";
import { useSelector } from "react-redux";
import { cancellAppointment, getAppointments } from "../services/apiServices";

/* eslint-disable react/prop-types */
const Turnos = ()=>{
    const [turnos, setTurnos] = useState([]);

    const user = useSelector((state)=>state.user.user);

    useEffect(()=>{
        getAppointments(user.id)
        .then(data=>setTurnos(data.appointments));
    }, []);

    const onCancelAppointment = (id)=>{
        cancellAppointment(id).then(resp=>{
            if (resp.message === "Appointment was cancelled") getAppointments(user.id)
                .then(data=>setTurnos(data.appointments));
        });
    }

    return(
        <div>
            {
            turnos?.map((turno)=><Turno 
                key={turno.id} 
                data={turno} 
                onCancelAppointment={onCancelAppointment}
            />)}
        </div>
    )
}

export default Turnos;