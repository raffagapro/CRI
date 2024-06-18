import Form from "../../components/Form/Form";
import SideBar from "../../components/SideBar/SideBar";
import styles from './Home.module.css';
const { 
    main,
} = styles;

// eslint-disable-next-line react/prop-types, no-unused-vars
function Home({ title, handleLogin }) {
    return(
        <div className="container">
            <div className="row">
                <SideBar />
                <div className={`col-9 ${main}`}>
                    <Form title={title} handleLogin={handleLogin}/>
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