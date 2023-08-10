import React from 'react'
import './Accountdelete.css'
import { Link } from "react-router-dom";
import SaveBtn from '../../Components/Buttons/SaveBtn';
import CancelBtn from '../../Components/Buttons/CancelBtn';

export default function Accountdelete() {
  return (
    <div>
        
        <div className="container">
        <div className="card">
            <h2>Delete Account</h2>
            <p>Do you want to permanently delete your account?</p>
         <div className='button-div'>   
         <Link to="/Homepage" ><CancelBtn/></Link>
            <button class="delete">Delete</button>

             </div>
            
        </div>
        </div>

      
      
    </div>
  )
}
