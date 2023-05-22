import React from 'react';
import './DeleteProfileBtn.css'
import DeleteBtn from './../../Assests/Deletebtn.png';
function DeleteProfileBtn(){
return(
    <div style={{align:'center'}}>
    <button className = 'button-DeleteProfile' href = " ">
        <img className='DeleteProfileBtn'src={DeleteBtn} alt="DeleteBtn"></img>
         Delete Profile
         </button>
  </div>
);
}
export default DeleteProfileBtn;