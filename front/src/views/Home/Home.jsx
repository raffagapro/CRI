/* eslint-disable react/prop-types */
import logo from '../../assets/logowhite.png';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Navbar from '../../components/Navbar/Navbar';
import Turnos from '../../components/Turnos/Turnos';
import styles from './Home.module.css';

const { 
    sideBar,
    bigLogo,
    mainBar
} = styles

function Home({session, onlogin}) {
    return(<>
            {session.login ? <Navbar />: null}
            {/* side bar con logo */}
            <div className={`col ${sideBar}`}>
                <img src={logo} alt="" className={bigLogo} />
            </div>
            {/* contenido dinamico */}
            <div className={`col-8 justify-content-center ${mainBar}`}>
                {session.login ? <Turnos userId={session.user.id}/> : <Login onlogin={onlogin}/>}
                {/* {session.login ? <Turnos userId={session.user.id}/> : <Register />} */}
                
            </div>
        </>)
}

export default Home;