import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Home from './views/Home/Home';
import axios from 'axios';
import { Route, Routes, useNavigate} from 'react-router-dom';
import Register from './components/Register/Register';
import Turnos from './components/Turnos/Turnos';
import Navbar from './components/Navbar/Navbar';
import ScheduleApp from './components/ScheduleApp/ScheduleApp';

function App() {
  const [session, setSession] = useState({
    login:false,
    user:{}
  }); //memoria 1 
  const navigate = useNavigate();

  const onLogin = (userData)=>{
    const url = `http://localhost:3000/users/login`;
    axios.post(url, userData).then(resp=>{
      try {
        if (resp.data.login) setSession({
          ...session,
          login: true,
          user: resp.data.user
        });
      } catch (error) {
        alert(error)
      }
    })
  }
  

  const onLogout = ()=>{
    setSession({
      login:false,
      user:{}
    });
    navigate('/');
  }

  return (
    <div className='container row'>
      {session.login ? <Navbar onLogout={onLogout}/>: null}
      <Routes>
        {/* HOME */}
        <Route path='/' exact element={<Home session={session} onlogin={onLogin} />}/>

        {/* REGISTER */}
        <Route path='/register' element={<Register />}/>

        {/* APPOINTMENTS */}
        <Route path='/appointments' exact element={<Turnos userId={session.user.id} />}/>

        {/* SCHEDULE APPOINTMENTS */}
        <Route path='/appointments/schedule' element={<ScheduleApp userId={session.user.id}/>}/>

        {/* ABOUT */}
        {/* <Route path='/about' element={<About />}/> */}
      </Routes>
      {/* <Navbar login={login}/> */}
    </div>
  )
}

export default App
