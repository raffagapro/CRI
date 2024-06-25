/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import './App.css'
import Dahsboard from './views/Dashboard/Dashboard';
import Home from './views/Home/Home'


function App() {
  //crea un estado
  let [userData, setUserData] = useState({
    "login": false,
    "user": {}
  });

//funcion para cambiar el estado

  const handleLogin = (userCreds) =>{ //referencia memoria1
    //hacer llamado al back
    const URL = `http://localhost:3000/users/login`;
    axios.post(URL, userCreds).then(resp=>{
      setUserData(resp.data)
    }).catch(err=>{
          alert('Bad Credentials')
    });
  }
  
  const onLogout = ()=>{
    setUserData({
      "login": false,
      "user": {}
    });
  }

  return (
    <>
      {/* LANDING */}

      {/* DASHBOARD (HOME) DE TURNOS */}
      {
      !userData.login ? 
        <Home handleLogin={handleLogin}/> :
        <Dahsboard onLogout={onLogout} userID={userData.user.id} />
      }
      {/* REGISTER */}
    </>
  )
}

export default App
