/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Navbar from "../../components/Navbar/Navbar"
import Turns from "../../components/Turns/Turns";

import mockApps from "../../helpers/myTurns";

import styles from "./Dashboard.module.css";
const {
    main
} = styles;

function Dahsboard({ onLogout }) {
    const [ turnos, setTurnos ] = useState(mockApps);

    return(
        <div className="container">
            <div className="row">
                <Navbar onLogout={onLogout} />
                <SideBar />
                <div className={`col-9 ${main}`}>
                    <Turns turnos={turnos} />
                </div>
            </div>
        </div>
    )
}

export default Dahsboard;