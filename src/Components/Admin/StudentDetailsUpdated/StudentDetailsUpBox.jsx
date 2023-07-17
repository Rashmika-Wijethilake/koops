import React from "react";
import "./StudentDetailsUpBox.css"
import CorrectIcon from './../../../Assests/CorrectIcon.png';
import OkBtn from "../../Buttons/OkBtn";
export default function StudentDetailsUpBox() {
    return (

      <div className ="StudentDetailsUpBox">
        <div className="Stud-Det-cont-Box"> 
            <h1> Student Details Updated</h1>
         </div>
         <div>
         <img className='imageCorrect'src={CorrectIcon} alt="CorrectIcon"></img> 
         </div>
       
        <OkBtn/>   
           
      </div>
    );
}