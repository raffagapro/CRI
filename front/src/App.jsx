import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Home from './views/Home/Home';

//mock DB
const mockedUser ={
  username:'batman@gmail.com',
  password: '1234test',
  id:56
}

function App() {
  const [user, setUser] = useState({
    id:56,
    auth:false
  }); //memoria 1

  const login = (userData)=>{
    const { username, password } = userData;
    if (username === mockedUser.username && password === mockedUser.password) {
      setUser({
        ...user,
        id:56,
        auth:true
      })
    }else{
      window.alert('Login failed!')
    }
    
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
      <Home user={user} login={login} />
    </div>
  )
}

export default App
