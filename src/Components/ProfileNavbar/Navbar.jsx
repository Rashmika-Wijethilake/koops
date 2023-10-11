import React, { useState,  useEffect } from "react";
import KoopsLogo from './../../Assests/Koops-icon3.png';
import student from './../../Assests/student.png'
import "./navbar.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav>
      
      <img className='hp-imageKoopsLogo'src={KoopsLogo} alt="Koops"></img>
      
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><img src={student}></img></li>
        <li><h1>username</h1></li>
        <li><h1>studentID</h1></li>
        <li>
          <NavLink to="/Editprofile">Edit Profile</NavLink>
        </li>
        <li>
          <NavLink to="/Accountdelete">Delete Account</NavLink>
        </li>
        <li>
          <NavLink to="/SignOut">Sign out</NavLink>
        </li>
        <li>
        <img className='hp-imageKoopsLogo'src={KoopsLogo} alt="Koops"></img>
        </li>
  
      </ul>
      
    </nav>
  );
};

export default Navbar

