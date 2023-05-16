import React from 'react';
import './SignOutBtn.css'
import SignOutButton from './../../Assests/SignOut.png';
function SignOutBtn(){
return(
    <div style={{align:'center'}}>
    <button className = 'button-SignOut' href = " ">
        <img className='SignOutBtn'src={SignOutButton} alt="SignOutBtn"></img>
         SignOut
         </button>
  </div>
);
}
export default SignOutBtn;