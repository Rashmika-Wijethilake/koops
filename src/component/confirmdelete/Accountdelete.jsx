import React from 'react'
import './Accountdelete.css'

export default function Accountdelete() {
  return (
    <div>
        
        <div className="container">
        <div className="card">
            <h2>Delete Account</h2>
            <p>Do you want to permanently delete your account?</p>
         <div className='button-div'>   
            <button class="cancel">Cancel</button>
            <button class="delete">Delete</button>

             </div>
            
        </div>
        </div>

      
      
    </div>
  )
}
