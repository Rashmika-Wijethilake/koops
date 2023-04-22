import React from 'react';
import Footer from '../Footer/Footer';
import KoopsWithShadow from './../../Assests/KoopsWithShadow.png';
import HeaderWithoutBtns from '../Header/HeaderWithoutBtns';
import LogInBtn from '../Buttons/LogInBtn';
import './SignOut.css'

export default function SignOut() {
    return (

      <div className ="page-container" >
      <HeaderWithoutBtns/>
            <div className = "content-wrap">
               
                  <div className = "bodyText">
                   <img src={KoopsWithShadow} alt="Koops"></img>
                   
                    <div className='TextContainer'>
                    <h1 className='heading'> Successfully signed out from your Account </h1>
                    </div>
               
                  <LogInBtn/>
                  </div>                
            
            </div>
            <div className='footer'>
        <Footer />
        </div>
      </div>
    );
  }
  
     
