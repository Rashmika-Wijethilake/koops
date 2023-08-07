import React from "react";
import "./StudentRemovedDialogBox.css"
import CorrectIcon from './../../../Assests/CorrectIcon.png';
import OkBtn from "../../Buttons/OkBtn";
export default function StudentRemovedDialogBox() {
    return (
        <div className="StudentRemovedDB">
          <div className ="StudentRemovedDialogBox">
        <div className="Stud-Rem-cont-Box"> 
            <h1> Student Removed</h1>
         </div>
         <div>
         <img className='imageCorrect'src={CorrectIcon} alt="CorrectIcon"></img> 
         </div>
       
        <OkBtn/>   
           
      </div>
      </div>
    );
}