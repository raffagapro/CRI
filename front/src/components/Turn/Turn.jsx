/* eslint-disable react/prop-types */
function Turns({ data, name }) {
    return(
        <tr>
            <th scope="row">{data.id}</th>
            <td>{data.date}</td>
            <td>{data.time}</td>
            <td>{name}</td>
            <td>
                <button 
                    className={data.status === "active" ? "btn btn-success" : "btn btn-danger"}
                    onClick={()=>alert(`Turno: ${data.id}`)}
                >
                    {data.status}
                </button>
            </td>
        </tr>
    )
}

export default Turns