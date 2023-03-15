import React from 'react'
import {NavLink} from 'react-router-dom'
import { Dropdown,DropdownButton } from 'react-bootstrap';
// import '../../styles/bootstrap-5.3.0-alpha1-dist/css/bootstrap.css'
// import '../../styles/bootstrap-5.3.0-alpha1-dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const HomeScreen = () => {





  return (
    <>
      <h2>HomeScreen</h2>
    <div className='d-flex gap-5 justify-content-begin'>
        
      <div className='dropdown-menu dropdown-menu-dark position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px'>
            <ul className='list-unstyled mb-0'>
                <li className='mb-2'>
                    <DropdownButton id="dropdown-basic-button" title="Warrior" menuVariant='dark' variant='secondary' drop='end'>
                        <DropdownButton  className='mb-2' id="dropdown-basic-button" title="One Hand" menuVariant='dark' variant='secondary' drop='end'>

                        </DropdownButton>
                       <DropdownButton  className='mb-2' id="dropdown-basic-button" title="Two Hand" menuVariant='dark' variant='secondary' drop='end'>
                          
                        </DropdownButton>
                        <DropdownButton   className='mb-2' id="dropdown-basic-button" title="Shield" menuVariant='dark' variant='secondary' drop='end'>
                          
                        </DropdownButton>
                    </DropdownButton>
                </li>
                <li className='mb-2'>
                      <DropdownButton id="dropdown-basic-button" title="Wizard" menuVariant='dark' variant='secondary' drop='end'>
                        <DropdownButton  className='mb-2' id="dropdown-basic-button" title="Fire" menuVariant='dark' variant='secondary' drop='end'>

                        </DropdownButton>
                        <DropdownButton  className='mb-2' id="dropdown-basic-button" title="Ice" menuVariant='dark' variant='secondary' drop='end'>
        
                        </DropdownButton>
                        <DropdownButton   className='mb-2' id="dropdown-basic-button" title="Darkness" menuVariant='dark' variant='secondary' drop='end'>
        
                        </DropdownButton>
            
                      </DropdownButton>
                </li>
                <li className='mb-2'>
                      <DropdownButton id="dropdown-basic-button" title="Hunter" menuVariant='dark' variant='secondary' drop='end'>
                            <DropdownButton  className='mb-2' id="dropdown-basic-button" title="Arrow" menuVariant='dark' variant='secondary' drop='end'>

                            </DropdownButton>
                            <DropdownButton  className='mb-2' id="dropdown-basic-button" title="Shoot" menuVariant='dark' variant='secondary' drop='end'>
                              
                            </DropdownButton>
                            <DropdownButton   className='mb-2' id="dropdown-basic-button" title="Two Knifes" menuVariant='dark' variant='secondary' drop='end'>
                              
                            </DropdownButton>
                      </DropdownButton>
                </li>
                

              
 
               
            </ul>
            
      </div>
    </div>  
    
    
  
    </>
  )
}

export default HomeScreen
