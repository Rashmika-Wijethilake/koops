import React from 'react'
import './ForgotPassword.css'

export default function ForgotPassword() {
  return (
    <div className="header">
    <div className="container">
    <h1 class="heading">Change Password</h1>
    <div class="container-box">
       <p class="content">New Password</p>
       <input type="password" class="password"></input>
       <p class="content">Confirm Password</p>
       <input type="password" class="password"></input>
     <div className='checkbox-container'>
     <input type="checkbox" className='checkbox' /> 
     <span>I Accept Terms and Conditions </span>
     </div>
     
     <button class = "reset_btn">Reset Password</button>
     
     </div> 
     </div> 
 </div>
  )
}
