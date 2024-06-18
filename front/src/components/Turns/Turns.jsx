/* eslint-disable react/prop-types */
import Turno from "../Turn/Turn";
function Turns({ turnos }) {
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
                    <Turno key={turno.id} data={turno}/>
                )}
            </tbody>
        </table>
    )
}

export default Turns