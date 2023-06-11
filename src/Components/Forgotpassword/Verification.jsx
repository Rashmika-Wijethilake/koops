import React from 'react'
import './Verification.css'


export default function Verification() {
  return (
    <div className='body-container'>
       <div className="container">
       <h1 class="verify-heading">Email Verification</h1>
       <p class ="para">We have sent a code your Email</p>
       
       <div class="container-box">
       <input type = "textbox" maxlength="1" className="text-box"/>
       <input type = "textbox" maxlength="1" className="text-box"/>
       <input type = "textbox" maxlength="1" className="text-box"/>
       <input type = "textbox" maxlength="1" className="text-box"/>
        
        </div> 
        <button class = "reset_btn">Verify Account</button>
        <p class ="Bp">Didn't Receive Code? <a href="#">Resend OTP</a></p>
        </div> 
       
    </div>
  )
}
