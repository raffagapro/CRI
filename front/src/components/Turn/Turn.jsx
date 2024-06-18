/* eslint-disable react/prop-types */
function Turns({ data }) {
    return(
        <tr>
            <th scope="row">{data.id}</th>
            <td>{data.date}</td>
            <td>{data.time}</td>
            <td>{data.user.name}</td>
            <td>
                <button onClick={()=>alert(`Turno: ${data.id}`)}>
                    {data.status}
                </button>
            </td>
        </tr>
    )
}

export default Turns