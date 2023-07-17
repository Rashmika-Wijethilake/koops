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
        
        <div className="dashboard">

            <div>
            <img className="koop" src={koop}></img>
            </div>

            <div className="text">
            <h1> Hello Super Admin</h1>
            </div>
       
            <div className="button-container">
                <table >
                <tr>
                   <td><a  href="#"><button><img src={student}></img><h2>Manage Student</h2></button></a></td>
                   <td><a  href="#"><button><img className="twel" src={twel}></img><h2>Total Study Groups</h2></button></a></td>
                </tr>
                <tr>
                   <td><a  href="#"><button><img src={admin}></img><h2>Manage Admin</h2></button></a></td>
                   <td><a  href="#"><button><img src={material}></img><h2>Add Materials</h2></button></a></td>
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