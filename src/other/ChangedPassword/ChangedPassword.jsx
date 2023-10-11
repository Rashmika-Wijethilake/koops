import React from 'react';
import Footer from '../../Components/Footer/Footer';
import LogInBtn from '../../Components/Buttons/LogInBtn';
import KoopsWithShadow from './../../Assests/KoopsWithShadow.png';
import HeaderWithoutBtns from '../../Components/Header/HeaderWithoutBtns';
import './ChangedPassword.css'

export default function ChangedPassword() {
    return (

      <div className ="page-container" >
        <HeaderWithoutBtns/>
            <div className = "content-wrap">
                <div className = "bodyText">
                <img src={KoopsWithShadow} alt="Koops"></img>
                <div className='TextContainer'>
                <h1 className='heading'> Successfully changed password.. </h1>
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
  
