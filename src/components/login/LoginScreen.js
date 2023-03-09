import React from 'react'


import '../../styles/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css'
const LoginScreen = () => {
  return (
    <div className='container'>
      <form className='form-group'>
           <input
            type='text'
            placeholder='Username or email'
           ></input>
           <input
            type='password'
            placeholder='Password'
           ></input>
      </form>

      <button 
      type='submit'
      className='btn btn-primary'
      >
        Login
      </button>
    </div>
  )
}

export default LoginScreen
