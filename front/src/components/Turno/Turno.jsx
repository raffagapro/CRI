/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";

const Turno = ({data, onCancelAppointment})=>{
    const user = useSelector((state)=>state.user.user);

    return(
        <>
        <div className="card text-end">
            <div className="card-body">
                <h5 className="card-title">{`${user.name}(${data.id})`}</h5>
                {data.status !== "cancel" ?
                <span className="badge text-bg-success">Activo</span>:
                <span className="badge text-bg-danger">Cancelled</span>}
                <p className="card-text">{`Date:${data.date} Time:${data.time}`}</p>
                <button onClick={()=>onCancelAppointment(data.id)} className="btn btn-danger">Cancelar Turno</button>
            </div>
        </div>

        </>
    )
}

export default Turno;