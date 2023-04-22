import React from "react";
import Footer from "../Footer/Footer";
import HeaderWithMenuIcon from "../Header/HeaderWithMenuIcon";
import KOOPS from "./../../images/Koops Big Image.png";
import GroupIcon from "./../../images/group_icon.png";
import AddIcon from "./../../images/plusIcon.png";
import "./Studygroup.css"

export default function StudyGroupEdit(){
    return(
        <div>
            <HeaderWithMenuIcon/>
      
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