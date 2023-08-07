import React from "react";
import Footer from "../../Components/Footer/Footer";
import bot from './../../Assests/chatbot.png';
import './homepage.css'
import KoopsLogo from './../../Assests/Koops-icon3.png';
import Menuicon from './../../Assests/MenuIcon.png'
import createicon from './../../Assests/createicon.png' 
import addIcon from './../../Assests/addIcon.png'
import { useLocation } from "react-router-dom";


export default function Homepage () {

    const location=useLocation()

    return(
        <div className="homepage-container">

            <div>
                <table>
                    <tr>
                        <td>
                        <img className='imageKoopsLogo'src={KoopsLogo} alt="Koops"></img>
                        </td>
                        <td>
                        <button className="hp-menuicon-button"><img className="hp-menuicon" src={Menuicon}></img></button>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="hp-centered-section">
                <img className="hp-bot" src={bot}></img>
            </div>

            <div className="hp-centered-section">
                <h1  className="hp-txt1"> {location.state.id} Welcome To KOOPS</h1> 
            </div>
            
            <div >
                <img className="hp-create-icon" src={createicon} alt="Create Icon" />
                <text className="hp-txt2">Create your First Study Group</text>
            </div>

            <div className="hp-centered-section">
                <button className="hp-addicon-btn" ><img className="hp-addicon" src={addIcon}></img></button>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}