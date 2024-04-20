import styles from './Navbar.module.css';
const { 
 container
} = styles

function Navbar(){
    return(
        <nav className={container}>
            <div>
                <button>
                    <span></span>
                </button>
                <div>
                    <div>
                        <a>Home</a>
                        <a>Features</a>
                        <a>Pricing</a>
                        <a>Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;