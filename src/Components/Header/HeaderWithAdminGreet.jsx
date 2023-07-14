import React from 'react';
import "./HeaderWithAdminGreet.css";
import KoopsLogo from './../../Assests/Koops-icon3.png';
//import {Link} from 'react-router-dom';
const HeaderWithAdminGreet = () =>{
    return(        

    <div className="Header-ContainerAdminGreet">
        <div className = "RowAdmin">
            {/* Column1 */}
            <div className = "column-AdminGreet">
                <div className= "imageContainer">
                    <img className='imageKoopsLogo'src={KoopsLogo} alt="Koops"></img>
                    <h1 className='HeadingAdmin'>Hello Admin</h1>
                </div>  
            </div>        
                      
        </div> 
    </div>
)
}
export default HeaderWithAdminGreet;