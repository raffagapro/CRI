/* eslint-disable react/prop-types */
const Turno = ({data})=>{
    return(
        <div className="card text-end">
            <div className="card-body">
                <h5 className="card-title">{data.user.name}</h5>
                <p className="card-text">{`Fecha: ${data.date} Hora: ${data.time}`}</p>
                <a href="#" className="btn btn-danger">Cancelar Turno</a>
            </div>
        </div>
    )
}

export default Turno;