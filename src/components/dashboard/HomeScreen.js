import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../styles/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css'
const HomeScreen = () => {





  return (
    <>
      <h2>HomeScreen</h2>
    <div className='d-flex gap-5 justify-content-begin'>
        
      <div className='dropdown-menu dropdown-menu-dark position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px'>
            <ul className='list-unstyled mb-0'>
                <li>
                    <NavLink className={(isActive) => 'dropdown-item rounded-2' + (isActive && 'active') }>
                        
                        <font>Warrior</font>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive) => 'dropdown-item rounded-2' + (isActive && 'active') }>
                        
                        <font>Wizard</font>
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(isActive) => 'dropdown-item rounded-2' + (isActive && 'active') }>
                      
                        <font>Hunter</font>
                    </NavLink>
                </li>
                
               
            </ul>
 
      </div>
    </div>  
    </>
  )
}

export default HomeScreen
