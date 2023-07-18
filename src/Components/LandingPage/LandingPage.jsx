import React from 'react';
import Footer from '../../Components/Footer/Footer';
import RequestDemoBtn from '../Buttons/RequestDemoBtn';
import KoopsWithShadow from './../../Assests/KoopsWithShadow.png';
import Header from '../Header/Header';
import './LandingPage.css'

export default function LandingPage() {
    return (
      <div className ="page-container" >
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
  

