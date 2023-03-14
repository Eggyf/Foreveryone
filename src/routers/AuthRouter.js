import React from 'react'
import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/login/RegisterScreen';
import AppRouter from '../routers/AppRouter'
const AuthRouter = () => {
  return (
    <BrowserRouter>
    <div>

       
       <Routes>
        <Route 
        path='/'
        element={<LoginScreen/>}
        />
        <Route 
        path='/auth/register'
        element={<RegisterScreen/>}
        />
        <Route
        path="/"
        element={<Navigate to="/" replace />}
         />
       <Route path='/*' element={<AppRouter />} />

       </Routes>
       
      
    </div>
    </BrowserRouter>
  )
}

export default AuthRouter
