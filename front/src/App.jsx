/* eslint-disable no-unused-vars */

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './views/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Turnos from './components/Turnos/Turnos';
import Navbar from './components/Navbar/Navbar';
import ScheduleApp from './components/ScheduleApp/ScheduleApp';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const login = useSelector((state)=>state.user.login);

  return (
    <div className='container row'>
      {login ? <Navbar />: null}
      <Routes>
        {/* HOME */}
        <Route path='/' exact element={<Home />}/>

        {/* REGISTER */}
        {/* <Route path='/register' element={<Register />}/> */}

        {/* APPOINTMENTS */}
        {/* <Route path='/appointments' exact element={<Turnos />}/> */}

        {/* SCHEDULE APPOINTMENTS */}
        {/* <Route path='/appointments/schedule' element={<ScheduleApp />}/> */}
        
      </Routes>
    </div>
  )
}

export default App
