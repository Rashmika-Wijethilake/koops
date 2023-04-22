import './App.css';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';
import { useState } from 'react';
import AccountVerified from './Components/AccountVerified/AccountVerified.jsx'
import LandingPage from './Components/LandingPage/LandingPage';
import Footer from './Components/Footer/Footer';

function App() {
 
   return (
    <div className="App">
   <Login/>
    </div>
  );
}

export default App;
