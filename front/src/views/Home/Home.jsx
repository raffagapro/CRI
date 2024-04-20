import styles from './Home.module.css';
const { 
 container
} = styles

function Home(props) {
    return(
        <h1 className={container}>{props.title}</h1>
    )
}

export default Home;