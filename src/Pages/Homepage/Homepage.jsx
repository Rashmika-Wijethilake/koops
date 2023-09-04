import React from "react";
import Footer from "../../Components/Footer/Footer";
import bot from './../../Assests/chatbot.png';
import './homepage.css'
import createicon from './../../Assests/createicon.png' 
import addIcon from './../../Assests/addIcon.png'
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../Components/ProfileNavbar/Navbar";


export default function Homepage () {

    const location=useLocation()
  
    return(
        <div className="homepage-container">

            <div>
                <Navbar/>

            </div>

            <div className="hp-centered-section">
                <img className="hp-bot" src={bot}></img>
            </div>

            <div className="hp-centered-section">
            <h1 className="hp-txt1">
                {location.state && location.state.id ? `${location.state.id} Welcome To KOOPS` : "Welcome To KOOPS"}
            </h1>

            </div>
            
            <div >
                <img className="hp-create-icon" src={createicon} alt="Create Icon" />
                <text className="hp-txt2">Create your First Study Group</text>
            </div>

            <div className="hp-centered-section">
                <Link to='/CreateStudyGroup' className="hp-addicon-btn" ><img className="hp-addicon" src={addIcon}></img></Link>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}