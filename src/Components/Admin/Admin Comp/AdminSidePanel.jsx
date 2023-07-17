import React from "react";
import AdminImage from './../../../Assests/AdminAcc.png'
import DeleteProfileBtn from "../../Buttons/DeleteProfileBtn";
import SignOutBtn from "../../Buttons/SignOutBtn";
import './AdminSidePanel.css'
export default function AdminSidePanel() {
    return (

      <div className ="page-container" >
            <div className = "content-wrap">
                <div className = "bodyText">
                <img className = 'AdminImage' src={AdminImage} alt="Admin"></img>
                <div className='TextContainer'>
                <h2 className='Admin-heading'> @Admin Name </h2>
                <h3 className='Admin-heading'> @Admin Id</h3>
                <h3 className='Admin-heading'> @University Name </h3>
                <h3 className='Admin-heading'> Admin </h3>

                </div>
                <div className="Buttons">
                <DeleteProfileBtn/>
                <SignOutBtn/>
                </div>
              </div> 
            </div>
           
      </div>
    );
}