import React from 'react';
import Footer from '../../Components/Footer/Footer';
import KoopsWithShadow from './../../Assests/KoopsWithShadow.png';
import HeaderWithoutBtns from '../../Components/Header/HeaderWithoutBtns';
import DoneBtn from '../../Components/Buttons/DoneBtn';
import './SuccessfullyDeletedAccount.css'


export default function SuccessfullyDeletedAccount() {
    return (
      
      <div className ="page-container" >
        <HeaderWithoutBtns/>
            <div className = "content-wrap">
                <div className = "bodyText">
                <img src={KoopsWithShadow} alt="Koops"></img>
                
                <div className='TextContainer'>
                <h1 className='heading2'> Successfully Deleted Account </h1>
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
  

