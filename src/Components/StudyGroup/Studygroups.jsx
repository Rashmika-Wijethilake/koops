import React from "react";
import Footer from "../Footer/Footer";
import HeaderWithMenuIcon from "../Header/HeaderWithMenuIcon";
import KOOPS from "./../../images/Koops Big Image.png";
import GroupIcon from "./../../images/group_icon.png";
import AddIcon from "./../../images/plusIcon.png";
import "./Studygroup.css"

export default function Studygroups(){
    return(
        <div className="page-container">
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

                <div className="div2">
                <img className="center" src={GroupIcon} alt="Koops"></img> 
                <h2>Group2</h2>
                </div>

                <div className="div3">
                <img className="center" src={GroupIcon} alt="Koops"></img> 
                <h2>Group3</h2>
                </div>

                <div className="div4">
                <img style={{ justifyContent: 'center', align:'left',height:'100px',width:'100px',}} 
                src={AddIcon} alt="Add"></img>
                </div> 

                <div >
                <img classname= 'imageContent' 
                src={KOOPS} alt="Koops"></img>
                </div>
            </div>
            
        </div>
        <Footer/>
        </div>

    
    );
}