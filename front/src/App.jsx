import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
// import Home from './views/Home/Home';

function App() {
  const handleClick = (title)=>{

    console.log(title);
  }

   
  return (
    <div className='container'>
      <Navbar users={()=>handleClick('title')}/>
      <Home title='Holla soy home' />
    </div>
  )
}

export default App
