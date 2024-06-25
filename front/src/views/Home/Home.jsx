/* eslint-disable no-unused-vars */
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import SideBar from "../../components/SideBar/SideBar";
import styles from './Home.module.css';
const { 
    main,
} = styles;

// eslint-disable-next-line react/prop-types, no-unused-vars
function Home({ handleLogin }) {
    return(
        <div className="container">
            <div className="row">
                <SideBar />
                <div className={`col-9 ${main}`}>
                    <Login title="Login" handleLogin={handleLogin}/>
                    {/* <Register title="Register" /> */}
                    <hr />
                </div>
                <div>
                    <small>Register</small>
                </div>
            </div>
            
        </div>
    )
}

export default Home;