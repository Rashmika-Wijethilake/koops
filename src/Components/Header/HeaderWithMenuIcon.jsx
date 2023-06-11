import React from 'react';
import "./Header.css";
import KoopsLogo from './../../Assests/Koops-icon3.png';
import MenuIcon from './../../Assests/MenuIcon.png';
//import {Link} from 'react-router-dom';
const HeaderWithMenuIcon = () =>{
    return(        

    <div className="Header-Container">
        <div className = "Row">
           {/* Column1 */}
           <div className = "column">
                <div className= "imageCont">
                    <img className= 'imageKoopsLogo' src={KoopsLogo} alt="Koops"></img> 
                </div>  
            </div>        
            {/* Column2 */}
            <div className = "column1">
                <div className="container2">
                   <img className='MenuImageIcon' src={MenuIcon} alt="Menu"></img> 
                </div>  
            </div>   
        </div> 
    </div>
)
}
export default HeaderWithMenuIcon;