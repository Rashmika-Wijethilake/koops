import React from 'react';
import "./Header.css";
import KoopsLogo from './../../Assests/Koops-icon3.png';
import { Navigate } from 'react-router';
//import {Link} from 'react-router-dom';
const Header = () =>{
    // const handleClick = () => {
    //     Navigate('/src/Components/Login/Login.jsx');
    //   };
    return(        

    <div className="Header-Container">
        <div className = "Row">
            {/* Column1 */}
            <div className = "column">
                <div className= "imageCont">
                    <img className='imageKoopsLogo'src={KoopsLogo} alt="Koops"></img> 
                </div>  
            </div>        
            {/* Column2 */}
            <div className = "column1">
                <div className="container2">
                    <div className = "Login-ButtonContainer">
                    {/* {<Navigate to="/src/Components/Login/Login.jsx" state={{}}>Login</Navigate> }*/} 
                        
                    {/* <button onClick={handleClick} className='LogInButton'>LogIn</button>   */}
                        <button className='LogInButton'>LogIn</button>  
                    </div> 
            {/* Column3 */}
                    <div className = "SignUp-ButtonContainer">
                        <button href = " " className='SignUpButton'> SignUp</button>
                    </div>
                </div>            
            </div>              
        </div> 
    </div>
)
}
export default Header;