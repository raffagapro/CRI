/* eslint-disable react/prop-types */
import logo from '../../assets/logowhite.png';
import Login from '../../components/Login/Login';
import Profile from '../../components/Profile/Profile';
import styles from './Home.module.css';
import { useSelector } from 'react-redux';

const { 
    sideBar,
    bigLogo,
    mainBar
} = styles

function Home() {
    const login = useSelector((state)=>state.user.login);
    
    return(<>
            {/* side bar con logo */}
            <div className={`col ${sideBar}`}>
                <img src={logo} alt="" className={bigLogo} />
            </div>
            {/* contenido dinamico */}
            <div className={`col-8 justify-content-center ${mainBar}`}>
                {login ? <Profile /> : <Login />}
            </div>
        </>)
}

export default Home;