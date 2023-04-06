import React from 'react'
import '../stylesheets/LoginPage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DismissableAlert } from './DismissableAlert'

const LoginPage = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState('login')
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ message: '', error: false })

  const handleLogin = () => {
    fetch('http://localhost:3001/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Username': username,
        'Password': password
      },
    })
      .then(res => res.json())
      .then(data => {
        if(data.error === true){
          setAlert(data);
        }else{
          navigate('/');
        }});
  }

  const handleRegister = () => {
    fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      })
      .then(res => res.json())
      .then(data => {
        if(data.error === true){
          setAlert(data);
        }else{
          setDisplay('login');
        }});
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  if (display === 'login') {
    return (
      <div className='vw-100 h-75 d-flex justify-content-center align-items-center'>
        <form className='mt-3 py-4 bg-dark text-light login-form d-flex justify-content-center align-items-center flex-column' onSubmit={handleSubmit}>
          <h3>Login</h3>
          <p>New here? Register <span className='text-primary hover-effect' onClick={() => setDisplay('register')}>here</span></p>
          <div className='form-group w-75'>
            <label>Username</label>
            <input type='text' className='form-control mb-2' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input type='password' className='form-control mb-2' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' className='btn btn-primary' onClick={() => handleLogin()}>Login</button>
          </div>
        </form>
      </div>
    )
  } else if ({ display } === 'register') {
    return (
      <div className='vw-100 h-75 d-flex justify-content-center align-items-center'>
        <form className='mt-3 py-4  bg-dark text-light login-form d-flex justify-content-center align-items-center flex-column'>
          <h3>Login</h3>
          <p>Already registered? Login <span className='text-primary hover-effect' onClick={() => setDisplay('login')}>here</span></p>
          <div className='form-group w-75'>
            <label>Username</label>
            <input type='text' className='form-control mb-2' placeholder='username' />
            <label>Password</label>
            <input type='password' className='form-control mb-2' placeholder='password' />
            <button type='submit' className='btn btn-primary'>Login</button>
          </div>
        </form>
      </div>
    )
  }

}

export default LoginPage