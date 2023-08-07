import React from "react";
import './Dashboard.css';
import koop from './../../../Assests/Koops-icon3.png';
import woman from './../../../Assests/woman.png';
import student from './../../../Assests/student.png';
import admin from './../../../Assests/admin.png';
import material from './../../../Assests/material.png';
import twel from './../../../Assests/twel.png';

const Dashboard = () => {

    const handleDeleteAccount = () => {
        // Logic for deleting the account goes here
      };
    
      const handleSignOut = () => {
        // Logic for signing out goes here
      };
    return (
        
        <div className="SA-dashboard">
            
            <div>
            <img className="SA-Dash-koop" src={koop}></img>
            </div>

            <div className="SA-Dash-text1">
            <h1> Hello Super Admin</h1>
            </div>
       
            <div className="SA-Dash-button-container">
                <table >
                <tr>
                   <td><button><img src={student}></img><span><h2>Manage Student</h2></span></button></td>
                   <td><button><img className="twel" src={twel}></img><span><h2>Total Study Groups</h2></span></button></td>
                </tr>
                <tr>
                   <td><button><img src={admin}></img><span><h2>Manage Admin</h2></span></button></td>
                   <td><button><img src={material}></img><span><h2>Add Materials</h2></span></button></td>
                </tr>
                </table>
            </div>
            

            <div className="rightside">
                <div className="profile">
                    <a  href="#"><img src={woman}></img></a>
                    <h2 >Super Admin Name</h2>
                    <h2 >Super Admin</h2>
                   
                    <div className="button2">
                    <button className="delete-account-button" onClick={handleDeleteAccount}>
                    Delete Account
                    </button>
                    <button className="sign-out-button" onClick={handleSignOut}>
                    Sign Out
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  Dashboard 