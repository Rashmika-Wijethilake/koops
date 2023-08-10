import React from 'react';
import Footer from '../../Components/Footer/Footer';
import KoopsWithShadow from './../../Assests/KoopsWithShadow.png';
import HeaderWithoutBtns from '../../Components/Header/HeaderWithoutBtns';
import LogInBtn from '../../Components/Buttons/LogInBtn';
import './SignOut.css';
import { Link } from 'react-router-dom';

export default function SignOut() {
    return (

      <div className ="signout-form-container" >
      <HeaderWithoutBtns/>
            <div className = "content-wrap">
               
                  <div className = "bodyText">
                   <img src={KoopsWithShadow} alt="Koops"></img>
                   
                    <div className='TextContainer'>
                    <h1 className='heading'> Successfully signed out from your Account </h1>
                    </div>
               
                 
                <Link to="/Login"> <LogInBtn/> </Link>
                  </div>                
            
            </div>
            <div className='footer'>
        <Footer />
        </div>
      </div>
    );
  }
  
     
