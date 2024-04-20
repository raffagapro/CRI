import logo from '../../assets/logowhite.png';
import MisTurnos from '../MisTurnos/MisTurnos';
// import Login from '../Login/Login';
import styles from './Home.module.css';
const {
    sideBar,
    bigLogo,
    mainBar
} = styles;

const Home = ()=>{
    return(<>
        <div className={`col ${sideBar}`}>
            <img src={logo} alt="" className={bigLogo} />
        </div>
        <div className={`col-8 justify-content-center ${mainBar}`}>
            {/* <Login /> */}
            <MisTurnos />
        </div>
    </>)
}

export default Home;