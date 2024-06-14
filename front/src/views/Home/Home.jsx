import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";
import styles from './Home.module.css';
const { 
    sideBar,
    main
} = styles;

function Home() {
    return(
        <div className="container">
            <Navbar />
            <div className="row">
            <div className={`col-3 ${sideBar}`}>SideBAr</div>
            <div className={`col-9 ${main}`}>
                <Form title='Login'/>
                <hr />
                <Form title='Register'/>
            </div>
            </div>
            
        </div>
    )
}

export default Home;