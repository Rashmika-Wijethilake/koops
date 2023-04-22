import React from 'react';
import Footer from '../Footer/Footer';
import KoopsWithShadow from './../../images/KoopsWithShadow.png';
import HeaderWithoutBtns from '../Header/HeaderWithoutBtns';
import DoneBtn from '../Buttons/DoneBtn';
import './VerifyEmail.css'


export default function VerifyEmail() {
    return (
      
      <div className ="page-container" >
        <HeaderWithoutBtns/>
            <div className = "content-wrap">
                <div className = "bodyText">
                <img src={KoopsWithShadow} alt="Koops"></img>
                
                <div className='TextContainer'>
                <h1 className='heading'> Please verify your email address.. </h1>
                </div>
              <emailprops email= "example@gmail.com"/>
             <DoneBtn/>
                  </div>  
            </div>
            <div className='footer'>
        <Footer />
        </div>
      </div>
    );
  }
  

