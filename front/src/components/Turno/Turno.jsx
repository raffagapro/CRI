/* eslint-disable react/prop-types */
const Turno = ({data, fName})=>{
    return(
        <>
        <div className="card text-end">
            <div className="card-body">
                <h5 className="card-title">{fName}</h5>
                {data.status !== "cancel" ?
                <span className="badge text-bg-success">Activo</span>:
                <span className="badge text-bg-danger">Cancelled</span>}
                <p className="card-text">{`Date:${data.date} Time:${data.time}`}</p>
                <a href="#" className="btn btn-danger">Cancelar Turno</a>
            </div>
        </div>

        </>
    )
}

export default Turno;