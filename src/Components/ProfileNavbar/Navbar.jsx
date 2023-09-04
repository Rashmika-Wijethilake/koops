import React, { useState } from "react";
import KoopsLogo from './../../Assests/Koops-icon3.png';
import student from './../../Assests/student.png'
import "./navbar.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  

  const handleDeleteAccount = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail"); // Retrieve the user's email from localStorage
      if (!userEmail) {
        console.error("User email not found in localStorage.");
        return;
      }

      const response = await axios.delete('http://localhost:3001/DeleteAccount', {
        data: {
          email: userEmail
        }
      });
      if (response.data === "success") {
        alert("User account deleted successfully.");
        // You can handle further actions like logging the user out or redirecting to a different page
      } else {
        console.error("Response data is not 'success'");
      }
    } catch (error) {
      console.error("Error during request:", error);
    }
  };


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
          <NavLink to="/Landingpage" onClick={handleDeleteAccount}>Delete Account</NavLink>
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

