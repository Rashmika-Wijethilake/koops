import React from "react";
import Footer from '../../Components/Footer/Footer';
import womanImage from './../../Assests/woman.png';
import SaveBtn from './../../Components/Buttons/SaveBtn';
import CancelBtn from './../../Components/Buttons/CancelBtn';
import './editprofile.css'

export default function editprofile() {

    return (
        <div className="App">
          <div className="container-editprofile">
            <div className='infor_holder'>
    
            <img src={womanImage} className = "womanimage"/>
               <h3 className='mainheading'>User name</h3>
               <h5 className='studentid'>Student ID</h5>
    
            </div>
         
            <form className="formstudent">
              <div className='mainholders'>
              <label htmlFor="name" className='label-editprofile'>Name:</label>              
              <input type="text" id="name" name="name" placeholder="Enter your name" required className='inputs'/>
    
              </div>
    
              <div className='mainholders'>
              <label htmlFor="email" className='label-editprofile'>Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required  className='inputs'/>
    
                </div>
    
                <div className='mainholders'>
    
                <label htmlFor="studentId" className='label-editprofile'>Student ID:</label>
              <input type="text" id="studentId" name="studentId" placeholder="Enter your student ID" required className='inputs' />
                  </div>
    
                  <div className='mainholders'>
    
                <label htmlFor="studentId" className='label-editprofile'>User name</label>
              <input type="text" id="username" name="studentId" placeholder="Enter your username" required className='inputs' />
                  </div>
    
                  <div className='mainholders'>
    
    <label htmlFor="studentId" className='label-editprofile'>Password</label>
    <input type="password" id="username" name="studentId" placeholder="Enter your password" required className='inputs' />
      </div>
    
      <div className='mainholders'>
    
    <label htmlFor="studentId" className='label-editprofile'>Confirm password</label>
    <input type="password" id="username" name="studentId" placeholder="Confirm your password" required className='inputs' />
      </div>
    
              <div className="buttons">
                <SaveBtn/>
                <CancelBtn/>
              </div>
            </form>
          </div>
         
          <div className="footer">
          <Footer/>  
          </div>
        
        </div>
        
    );
}