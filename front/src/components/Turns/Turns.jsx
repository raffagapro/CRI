/* eslint-disable react/prop-types */
import Turno from "../Turn/Turn";
function Turns({ turnos, name }) {
    return(
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {turnos.map(turno => 
                    <Turno key={turno.id} data={turno} name={name}/>
                )}
            </tbody>
        </table>
    )
}

export default Turns