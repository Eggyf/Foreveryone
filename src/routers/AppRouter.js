import React from 'react'
import {Route,Routes,Navigate} from 'react-router-dom';
import HomeScreen from '../components/dashboard/HomeScreen';
import LoginScreen from '../components/login/LoginScreen';
const AppRouter = () => {
  return (
   
             <Routes>
                <Route path='/' element={<LoginScreen/>}/>
                <Route path='/home' element={<HomeScreen/>}/>
                <Route
        path="/"
        element={<Navigate to="/home" replace />}
         />
             </Routes>
       
   
  )
}

export default AppRouter
