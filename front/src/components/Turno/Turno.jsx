/* eslint-disable react/prop-types */
const Turno = ({data, fName, onCancelAppointment})=>{
    return(
        <>
        <div className="card text-end">
            <div className="card-body">
                <h5 className="card-title">{fName}</h5>
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