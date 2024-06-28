/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
function Navbar({onLogout}) {
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                {/* <img src="/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
                Home
            </a>
            <Link className="navbar-brand" to="/schedule">
                Schedule Appointment
            </Link>
            <Link className="navbar-brand" to='/about'>
                About
            </Link>
            <a className="navbar-brand" href="#" onClick={onLogout}>
                Logout
            </a>
        </nav>
    )
}

export default Navbar