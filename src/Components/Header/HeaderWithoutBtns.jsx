import React from 'react';
import "./Header.css";
import KoopsLogo from './../../Assests/Koops-icon3.png';
//import {Link} from 'react-router-dom';
const HeaderWithoutBtns = () =>{
    return(        

    <div className="Header-Container">
        <div className = "Row">
            {/* Column1 */}
            <div className = "column">
                <div className= "imageCont">
                    <img className='MenuImageIcon'src={KoopsLogo} alt="Koops"></img> 
                </div>  
            </div> 
        </div> 
    </div>
)
}
export default HeaderWithoutBtns;