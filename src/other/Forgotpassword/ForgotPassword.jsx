import React from 'react'
import './ForgotPassword.css'

export default function ForgotPassword() {
  return (
    <div className='body-fp'> 
    <div className="header-FP">
    <div className="container-FP">
    <h1 class="heading-FP">Change Password</h1>
    <div class="container-box-FP">
       <p class="content-FP">New Password</p>
       <input type="password" class="password-FP"></input>
       <p class="content-FP">Confirm Password</p>
       <input type="password" class="password-FP"></input>
     <div className='checkbox-container-FP'>
     <input type="checkbox" className='checkbox-FP' /> 
     <span>I Accept Terms and Conditions </span>
     </div>
     
     <button class = "reset_btn-FP">Reset Password</button>
     
     </div> 
     </div> 
     </div>
 </div>
  )
}
