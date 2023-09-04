import React from "react";
import Footer from "../../Components/Footer/Footer";
import HeaderWithMenuIcon from "../../Components/Header/HeaderWithMenuIcon";
import KOOPS from "./../../Assests/Koops Big Image.png";
import GroupIcon from './../../Assests/group_icon.png';
import AddIcon from './../../Assests/plusIcon.png';
import "./Studygroup.css"
import Navbar from "../../Components/ProfileNavbar/Navbar";

export default function StudyGroupEdit(){
    return(
        <div>
            <Navbar/>
      
        <div className="container-main">
            <div className="texts">
            <h1>Hello user</h1>
            <h1>My Study Groups</h1>
            </div>
           
            <div className="flexdiv">
                <div className="div1">
                <img className="center" src={GroupIcon} alt="Koops"></img> 
                <h2>ExampleGroup</h2>
                </div>

                <div >
                <img classname= 'imageContent' src={KOOPS} alt="Koops"></img>
                </div>
            </div>
            
        </div>
        <Footer/>
        </div>

    
    );
}