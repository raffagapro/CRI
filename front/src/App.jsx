/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'
import Dahsboard from './views/Dashboard/Dashboard';
import Home from './views/Home/Home'


function App() {
  //crea un estado
  let [isLogin, setIsLogin] = useState(false); //memoria 1

//funcion para cambiar el estado

  const handleLogin = () =>{ //referencia memoria1
    //modifique el estado
    setIsLogin(true); //memoria 2
  }
  const onLogout = ()=>{
    setIsLogin(false);
  }

  return (
    <>
      {/* LANDING */}

      {/* DASHBOARD (HOME) DE TURNOS */}
      {
      !isLogin ? 
        <Home title="Login" handleLogin={handleLogin}/> :
        <Dahsboard onLogout={onLogout} />
      }
      {/* REGISTER */}
    </>
  )
}

export default App
