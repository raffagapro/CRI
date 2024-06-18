/* eslint-disable react/prop-types */
function Navbar({onLogout}) {
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                {/* <img src="/docs/4.6/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
                Home
            </a>
            <a className="navbar-brand" href="#">
                Schedule Appointment
            </a>
            <a className="navbar-brand" href="#">
                About
            </a>
            <a className="navbar-brand" href="#" onClick={onLogout}>
                Logout
            </a>
        </nav>
    )
}

export default Navbar