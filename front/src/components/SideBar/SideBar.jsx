import logo from "../../assets/logowhite.png";
import styles from './Sidebar.module.css';
const {
    sideBar,
    bigLogo
} = styles;


function SideBar() {
    return(
        <div className={`col-3 ${sideBar}`}>
                    <img src={logo} className={bigLogo} alt="" />
        </div>
    )
}

export default SideBar;