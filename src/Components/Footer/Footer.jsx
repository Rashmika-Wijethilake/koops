import React from 'react';
import "./Footer.css";
import FaceBookIcon from './../../Assests/Icon awesome-facebook-square.png'
import TwiiterIcon from './../../Assests/Icon awesome-twitter.png'
import InstagramIcon from './../../Assests/Icon awesome-instagram.png'
const Footer = () =>{
    return(
        <footer className="container">
            <div className = "row">
            {/* Column1 for other linked pages */}
                <div className = "col">
                    <h4 className ="unstyled-list">
                        <li> <a href=" " >Copyright</a></li>
                        <li><a href=" " >AboutUs</a></li>
                        <li><a href=" " >Blog</a></li>
                        <li>&copy; Koops {new Date().getFullYear()} All rights reserved  Privacy Policy</li>
                 </h4>
                </div>  
                        
            {/* Column2 for Icons and details */}
             <div className = "col2">
                    <h4 className ="unstyled-list2">
                        <li>Get in Touch With Us</li>
                        <li>
                           <img href = " " src={FaceBookIcon} alt="Koops" style={{width:'20px', height:'120px;', padding:'10px'}}></img>
                           <img href = " " src={TwiiterIcon} alt="Koops"style={{width:'20px', height:'120px;',padding:'10px'}}></img>
                           <img href = " " src={InstagramIcon} alt="Koops"style={{width:'20px', height:'120px;',padding:'10px'}}></img>
                        </li>
                        <li>Developed By:</li>
                        <li>DevKoops</li>
                    </h4>
                </div>  
            </div>      
        </footer> 
 
    )
}
export default Footer;
