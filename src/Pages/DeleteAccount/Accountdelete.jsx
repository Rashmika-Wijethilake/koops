import React from 'react'
import './Accountdelete.css'
import { Link } from "react-router-dom";
import HeaderWithoutBtns from '../../Components/Header/HeaderWithoutBtns';
import Footer from '../../Components/Footer/Footer';

export default function Accountdelete() {
  return (

<div> 

        <HeaderWithoutBtns/>

    <div className = "content-wrap-Dl">                 
        <div className='Container-dl'>

          <div className="delete-content">
                <p>Do you want to permanently delete your account?</p>

            <div className='button-div'>  
                <Link className='DL-YES' to="/DeleteAccount">Yes</Link>  
                <Link className='DL-NO' to="/Homepage" >No</Link>                              
            </div>  

          </div>
        </div>
    </div>

        <div> 
          <Footer />
        </div>
</div>



  )
}
