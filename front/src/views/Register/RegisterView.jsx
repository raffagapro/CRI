/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import Register from "../../components/Register/Register";
import SideBar from "../../components/SideBar/SideBar";
import styles from './RegisterView.module.css';
import { useEffect } from "react";
const { 
    main,
} = styles;

// eslint-disable-next-line react/prop-types, no-unused-vars
function RegisterView() {
    const navigate = useNavigate();
    
    return(
        <div className="container">
            <div className="row">
                <SideBar />
                <div className={`col-9 ${main}`}>
                    <Register title="Register" />
                    <hr />
                </div>
                <div>
                    <small>Register</small>
                </div>
            </div>
            
        </div>
    )
}

export default RegisterView;