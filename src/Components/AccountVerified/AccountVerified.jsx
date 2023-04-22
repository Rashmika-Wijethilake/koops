import React from 'react';
import Footer from '../Footer/Footer';
import LogInBtn from '../Buttons/LogInBtn';
import KoopsWithShadow from './../../Assests/Images/KoopsWithShadow.png'
import HeaderWithoutBtns from '../Header/HeaderWithoutBtns';
import './AccountVerified.css'

export default function AccountVerified() {
    return (

      <div className ="page-container" >
      <HeaderWithoutBtns/>
            <div className = "content-wrap">
               
                  <div className = "bodyText">
                <img src={KoopsWithShadow} alt="Koops"></img>
                <div className='TextContainer'>
                <h1 className='heading'> Your account has been verified.. </h1>
                </div>
                    <LogInBtn />
                  </div>                
                  
             
            {/* </div> */}
            </div>
            <div className='footer'>
        <Footer />
        </div>
      </div>
    );
  }
  