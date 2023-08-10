import React from 'react';
import Footer from '../../Components/Footer/Footer';
import RequestDemoBtn from '../../Components/Buttons/RequestDemoBtn';
import KoopsWithShadow from './../../Assests/KoopsWithShadow.png';
import { Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './LandingPage.css'

export default function LandingPage() {
    return (
<<<<<<< HEAD
      <div className ="lp-page-container" >
=======
      <div className ="page-container-LP" >
>>>>>>> 4e2ff7fcad582dba659c0a5d83e7a1987b3ae123
        <Header/>
            <div className = "content-wrap-LP">
                <div className = "bodyText-LP">
                <img src={KoopsWithShadow} alt="Koops"></img>
                
                <div className='TextContainer-LP'>
                    <h1 className='heading-LP'> Hi! I'm Koops </h1>
                    <h2 className='heading-LP'>Empowering learning through AI chatting- Where knowledge meets convenience! </h2>
                    </div>
                    <RequestDemoBtn/>
                  </div>   
            </div>

        <div className='footer'> 
          <Footer />
        </div>
      </div>
    );
  }
  

