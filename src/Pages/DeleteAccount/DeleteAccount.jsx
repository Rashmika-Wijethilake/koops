import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../../Components/Footer/Footer';
import HeaderWithoutBtns from '../../Components/Header/HeaderWithoutBtns';
import './DeleteAccount.css';
import { Link } from "react-router-dom";

function DeleteAccount() {
  const [emailToDelete, setEmailToDelete] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteAccount = () => {
    axios.delete(`http://localhost:3001/delete-account/${emailToDelete}`)
      .then((response) => {
        if (response.status === 200) {
          setMessage(response.data.message);
        } else {
          setMessage('Account deletion failed.');
        }
      })
      .catch((error) => {
        setMessage('Account deletion failed.');
      });

      
  };

  return (

    <div> 

        <HeaderWithoutBtns/>

    <div className = "content-wrap-Dl2">                 
        <div className='Container-dl2'>
        <div className="delete-content2">

            <h1>Delete Account</h1>
            <p>Enter your email to delete your account:</p>
            <input type="email" value={emailToDelete} onChange={(e) => setEmailToDelete(e.target.value)} />
            <button className='DL-btn' onClick={handleDeleteAccount}>Delete</button>
            
            <p>{message}<Link to='/SuccessfullyDeletedAccount' className='D-btn'>ok</Link></p>

            
        </div>
        </div>

    </div>

        <div> 
          <Footer />
        </div>
</div>
    
  );
}

export default DeleteAccount;
