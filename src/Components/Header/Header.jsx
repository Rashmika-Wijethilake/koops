import React from 'react';
import {useState, useEffect} from 'react';
import {Route, Switch} from "react-router-dom";
import "./Header.css";
import KoopsLogo from './../../Assests/Koops-icon3.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Header = () =>{
<<<<<<< HEAD


    const navigate = useNavigate();

=======

    const navigate = useNavigate();
>>>>>>> 9c6da86553a20e104867db89e18b413acfaffbbe
      return(        

    <div className="header-Container">
        <div className = "header-Row">
            {/* Column1 */}
            <div className = "hd-column">
                <div className= "hd-imageCont">
                    <img className='hd-imageKoopsLogo'src={KoopsLogo} alt="Koops"></img> 
                </div>  
            </div>        
            {/* Column2 */}
            <div className = "hd-column1">
                <div className="header-container2">
                    <div className = "hd-Login-ButtonContainer">
                    <button onclick="/Login" type="submit" className='hd-LogInButton'><Link to="/Login" className='hd-link'>Login</Link></button>
                    </div> 
            {/* Column3 */}
                    <div className = "hd-SignUp-ButtonContainer">
                        <button onclick="/Signup"  className='hd-SignUpButton'> <Link to="/Signup" className='hd-link'>SignUp</Link></button>
                    </div>
                </div>            
            </div>            
        </div> 
    </div>
)
}
export default Header;