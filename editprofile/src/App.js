import React from 'react';
import './App.css';
import img1 from './img/fb.png';
import img2 from './img/inster.png';
import img3 from './img/twitter.png';
import img4 from './img/koopnew.png';
import womanImage from './img/woman.png'



 
 
export default function App() {
  return (
    
    
    <div className="App">
            <img src={img4} alt="Logo" className="logo" />

    <div className="container">
      <div className='infor_holder'>

      <img src={womanImage} className = "womanimage"/>
         <h3 className='mainheading'>User name</h3>
         <h5 className='studentid'>Student ID</h5>


      </div>
   
      <form>
        <div className='mainholders'>
        <label htmlFor="name" className='thebables'>Name:</label>
        
        <input type="text" id="name" name="name" placeholder="Enter your name" required className='inputs'/>

        </div>

        <div className='mainholders'>
        <label htmlFor="email" className='thebables'>Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required  className='inputs'/>

          </div>

          <div className='mainholders'>

          <label htmlFor="studentId" className='thebables'>Student ID:</label>
        <input type="text" id="studentId" name="studentId" placeholder="Enter your student ID" required className='inputs' />
            </div>

            <div className='mainholders'>

          <label htmlFor="studentId" className='thebables'>User name</label>
        <input type="text" id="username" name="studentId" placeholder="Enter your username" required className='inputs' />
            </div>

            <div className='mainholders'>

<label htmlFor="studentId" className='thebables'>Password</label>
<input type="password" id="username" name="studentId" placeholder="Enter your password" required className='inputs' />
</div>

<div className='mainholders'>

<label htmlFor="studentId" className='thebables'>Confirm password</label>
<input type="password" id="username" name="studentId" placeholder="Confirm your password" required className='inputs' />
</div>

        <div className="buttons">
          <button type="submit" className='asctionbuttons'>Save</button>
          <button type="button" className='asctionbuttons'>Cancel</button>
        </div>
      </form>
    </div>
   
    <div className="footer">
      <div className="footer-left">
        <ul>
          <li>
            <a href=" "  >Copyright</a>
          </li>
          
          <li>
            <a href=" "  >About Us</a>
          </li>
          <li>
          <a href=" "  >Blog</a>
          <li>
          <a href=" "  >© Koops 2023 All rights reserved</a>

          </li>
          </li>
        </ul>
      </div>

      <div className='footer_icons'>
        <p>get download icons</p>
        <div className='icon_holder'>
    <img src={img1} className='icons'/>
    <img src={img2} className='icons'/>
    <img src={img3} className='icons'/>


        </div>
        <p>Developed by</p>
        <p>DevKoops</p>

      </div>
    </div>

   </div>
  
  );
}



