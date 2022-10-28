import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { useNavigate ,state } from 'react-router-dom';



import Home from './container/Home';
import firebase from "firebase/compat/app";
import { Pin } from './components';

const App = () => {
  const [user, setUser] = useState(null);
 

  useEffect(() => 
  
  {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
      
  }, [])
  

  console.log(user);





  return (
    <BrowserRouter>
    <Routes className='text-3xl font-bold underline'>
      <Route path= "/*" element={user ? <Home userinfo={user}/> : <Login/>}/>
      <Route path="/" element={ <Pin userinfo={user}/> } />
      
      
    </Routes>

    </BrowserRouter>
  )
}
export default App;
  /*   <BrowserRouter>
        {user ? <Home user={user}/> : <Login/>}


    <Routes className='text-3xl font-bold underline'>
      <Route path="login" element={<Login />} />

      <Route path="/" element={<Home/>} />
      
      
    </Routes>

    </BrowserRouter>
  ) 
}
*/
