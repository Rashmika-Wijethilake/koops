import React from "react";
import Footer from '../Footer/Footer';
import bot from './../../Assests/chatbot.png';
import './homepage.css'
import KoopsLogo from './../../Assests/Koops-icon3.png';
import Menuicon from './../../Assests/MenuIcon.png'
import createicon from './../../Assests/createicon.png' 
import addIcon from './../../Assests/addIcon.png'



export default function Homepage () {

    return(
        <div className="homepage-container">

            <div>
                <table>
                    <tr>
                        <td>
                        <img className='imageKoopsLogo'src={KoopsLogo} alt="Koops"></img>
                        </td>
                        <td>
                        <button className="menuicon-button"><img className="menuicon" src={Menuicon}></img></button>
                        </td>
                    </tr>
                </table>
            </div>

            <div className="centered-section">
                <img className="bot" src={bot}></img>
            </div>

            <div className="centered-section">
                <h1  className="text1"> Welcome To KOOPS</h1> 
            </div>
            
            <div >
                <img className="create-icon" src={createicon} alt="Create Icon" />
                <text className="text2">Create your First Study Group</text>
            </div>

            <div className="centered-section">
                <button className="addicon-button" ><img className="addicon" src={addIcon}></img></button>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    );
}