import './App.css';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';
import { useState } from 'react';
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import AccountVerified from './Components/AccountVerified/AccountVerified.jsx'
import ChangedPassword from './Components/ChangedPassword/ChangedPassword'
import SignOut from './Components/SignOut/SignOut.jsx'
import Homepage from './Components/Homepage/Homepage';
import Sidebar from './Components/SuperAdmin/Sidebar';
import Dashboard from './Components/SuperAdmin/Dashboard';



function App() {
 
   return (
    <div className="App">
   <Homepage/>
    </div>
  );
}

export default App;
