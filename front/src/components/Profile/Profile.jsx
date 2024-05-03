/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Profile = ({user})=>{
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{user.email}</h6>
                <p className="card-text">{`nDni:${user.nDni} / birthdate:${user.birthdate}`}</p>
                <Link className="card-link" to='/appointments'>Appointments</Link>
            </div>
        </div>
    )
}

export default Profile