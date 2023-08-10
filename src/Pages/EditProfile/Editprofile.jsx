import React from "react";
import Footer from '../../Components/Footer/Footer';
import womanImage from './../../Assests/woman.png';
import SaveBtn from '../../Components/Buttons/SaveBtn';
import CancelBtn from '../../Components/Buttons/CancelBtn';
import './editprofile.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export default function Editprofile() {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    username: "",
    password: "",
    confirm_password: ""
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:3001/Editprofile', formData);
    if (response.data === "success") {
      alert("user details updated")
      
      window.location.href = "/Homepage";
    } else {
      console.error("Response data is not 'success'");
    }
  } catch (error) {
    console.error("Error during request:", error);
  }
};



    return (
        <div>
          <div className="container-editprofile">
              <div className='infor_holder'>
                <div>
                  <img src={womanImage}/>
                </div>
              
                <div className="info-hold-text">
                  <h1>User name</h1>
                  <h3>Student ID</h3>
                </div>
              </div>
         
            <form className="formstudent">
              
              <label htmlFor="name">Name              
                <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required className='inputs'/>
              </label>
    
              <label htmlFor="email">Email
                <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required  className='inputs'/>
              </label>
        
              <label htmlFor="studentId">Student ID
                <input type="text" id="studentId" name="studentId" placeholder="Enter your student ID" value={formData.studentId} onChange={handleChange} required className='inputs' />
              </label>
    
              <label htmlFor="username">User name
                <input type="text" id="username" name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} required className='inputs' />
              </label>
    
              <label htmlFor="password">Password
                <input type="password" id="username" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required className='inputs' />
              </label>
                
              <label htmlFor="password">Confirm password
                <input type="password" id="username" name="confirm_password" placeholder="Confirm your password" value={formData.confirm_password} onChange={handleChange} required className='inputs' />
              </label>
    
              <div className="buttons">
                <SaveBtn onClick={handleSubmit}/>
                <Link to="/Homepage" ><CancelBtn/></Link>

                

              </div>
            </form>
          </div>
         
          <div>
          <Footer/>  
          </div>
        
        </div>
        
    );
}