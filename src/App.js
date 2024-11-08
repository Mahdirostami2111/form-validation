import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  const [error, setError] = useState({})
  const [data,setData] = useState({
    username : '',
    password : ''
})

  const changeHandeler = (e) => {
    setData({...data,[e.target.name] : e.target.value})
    console.log(data);
}

  
  const formValidation = (data) => {
    const newError = {};

    if(!data.username) {
      newError.username = 'username required!'
    }

    if(!data.password) {
      newError.password = 'password is required!'
    }
    else if (data.password.length < 6) {
      newError.password = 'Password Need to be 6 character or more'
    }

    return newError
  }


  useEffect (() => {
      setError(formValidation(data))
  },[data])



  return (


    <div className='container'>
      <div className='login_title'>
        <h1>Welcome</h1>
      </div>

      <form className='login_form'>
        <div className='username_input'>
          <label>Username</label>
          <input  type='text' name='username' onChange={changeHandeler}></input>
          {error.username && <p>{error.username}</p>}
        </div>
        <div className='password_input'>
          <label>Password</label>
          <input type='password' name='password' onChange={changeHandeler}></input>
          {error.password && <p>{error.password}</p>}
        </div>

        <div className='button'>
          <button className='btn' onClick={changeHandeler} type='button'>Login</button>
        </div>
      </form>
    </div>
    
  )
}

export default App;
