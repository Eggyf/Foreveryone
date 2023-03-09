import React, { useEffect } from 'react'
import { useForm } from './useForm'
import {useNavigate} from 'react-router-dom';
import '../login/Login.css'
import '../../styles/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css'
const LoginScreen = () => {

   const navigate = useNavigate();

  const [setValues,handleInputChange,reset] = useForm(
    {
        user: '',
        email: '',
        password:''

    }
  );
  const {
    user,
    email,
    password
  } = setValues;
   useEffect(() =>{
console.log('object');

   },[setValues])
  const handleSubmit = (e) => {
    console.log(setValues);
    reset();
    e.preventDefault();
  }
   
    const handleSignIn = () => {
         navigate('/home',{
            replace: true
         });
      
      
        
    }


  return (
    <div className='container text-center mt-5'>

        <h1 className='h1 mt-3 mb-3 fw-normal'>Foreveryone</h1>

        <h3 className='h3 mb-3 fw-normal'>Sign In</h3>
      
       <main className='form-signin w-100 m-auto'>

            <form onSubmit={handleSubmit}>

                <div  className='form-floating'>

                    <input
                    type='text'
                    placeholder='Username or email'
                    className='form-control'
                    id='user-floating'
                    name='user'
                    onChange={handleInputChange}
                    value={user}
                ></input>
                <label htmlFor = 'user-floating'>
                        <font>User or email</font>
                </label>
        </div>
        <div  className='form-floating'>
                <input
                    type='email'
                    placeholder='Password'
                    className='form-control'
                    id='email-floating'
                    name='email'
                    onChange={handleInputChange}
                    value={email}
                ></input>
                <label htmlFor = 'email-floating'>
                    <font>Email</font>
                </label>
        </div>
        <div  className='form-floating'>
                <input
                    type='password'
                    placeholder='Password'
                    className='form-control'
                    id='password-floating'
                    name='password'
                    onChange={handleInputChange}
                    value={password}
                ></input>
                <label htmlFor = 'password-floating'>
                    <font>Password</font>
                </label>
        </div>
        <div className='checkbox mb-3'>
            <label>
            <input type='checkbox' value = 'remember me'></input>
              <font>Remember me</font>
            </label>
        </div>
       
        
                <button 
            type='submit'
            className='w-50 btn-lg btn btn-primary'
            onClick={handleSignIn}
            >
                Login
            </button>
    
      </form>
      

     
        </main> 
    </div>
  )
}

export default LoginScreen
