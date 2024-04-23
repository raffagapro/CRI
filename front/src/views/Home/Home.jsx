/* eslint-disable react/prop-types */
import logo from '../../assets/logowhite.png';
import Login from '../../components/Login/Login';
import Turnos from '../../components/Turnos/Turnos';
import styles from './Home.module.css';

const { 
    sideBar,
    bigLogo,
    mainBar
} = styles

function Home({user, login}) {
    return(<>
            {/* side bar con logo */}
            <div className={`col ${sideBar}`}>
                <img src={logo} alt="" className={bigLogo} />
            </div>
            {/* contenido dinamico */}
            <div className={`col-8 justify-content-center ${mainBar}`}>
                {user.auth ? <Turnos userID={user.id}/> : <Login login={login}/>}
            </div>
        </>)
}

export default Home;