import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomeScreen from '../components/dashboard/HomeScreen';
import LoginScreen from '../components/login/LoginScreen';
const AppRouter = () => {
  return (
    <BrowserRouter>
             <Routes>
                <Route path='/' element={<LoginScreen/>}/>
                <Route path='/home' element={<HomeScreen/>}/>

             </Routes>
       
    </BrowserRouter>
  )
}

export default AppRouter
