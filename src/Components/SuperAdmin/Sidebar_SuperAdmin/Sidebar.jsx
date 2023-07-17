import React from "react";
import student from './../../../Assests/student.png';
import admin from './../../../Assests/admin.png';
import material from './../../../Assests/material.png';
import woman from './../../../Assests/woman.png';
import './Sidebar.css'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="navigation" >
                <ul className="list">
                <li><a  href="#"><img src={student}></img></a></li>
                <li><a  href="#"><img src={admin}></img></a></li>
                <li><a  href="#"><img src={material}></img></a></li>
                <li className="woman"><a  href="#"><img src={woman}></img></a>
                <h2 className="text">Super Admin</h2></li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar