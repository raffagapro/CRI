import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/userReducer";

/* eslint-disable react/prop-types */
function Navbar({onLogout}){
    const dispatch = useDispatch();

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to='/'>
                    <span className="navbar-brand" >Home</span>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav justify-content-end">
                    {/* SCHEDULE APPOINTMENT */}
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/appointments/schedule">Schedule App</Link>
                    </li>
                    {/* MIS TURNOS */}
                    <li className="nav-item">
                        <Link className="nav-link" to='/appointments'>Appointments</Link>
                    </li>
                    {/* test */}
                    <li className="nav-item">
                        <button className="nav-link" onClick={()=>dispatch(login({login:true, user:'chris'}))}>Test</button>
                    </li>

                    {/* LOGOUT */}
                    <li className="nav-item">
                        <button className="nav-link" onClick={onLogout}>Logout</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;