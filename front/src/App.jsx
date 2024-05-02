import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Home from './views/Home/Home';
import axios from 'axios';

function App() {
  const [session, setSession] = useState({
    login:false,
    user:{}
  }); //memoria 1


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



  // const logout = ()=>{
  //   setUser({
  //     id:'',
  //     auth:false
  //   })
  // }

  return (
    <div className='container row'>
      {/* <Navbar login={login}/> */}
      <Home session={session} onlogin={onLogin} />
    </div>
  )
}

export default App
