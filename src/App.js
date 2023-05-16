import './App.css';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';
import { useState } from 'react';
import LandingPage from './Components/LandingPage/LandingPage.jsx'
import AccountVerified from './Components/AccountVerified/AccountVerified.jsx'
import ChangedPassword from './Components/ChangedPassword/ChangedPassword'
import SignOut from './Components/SignOut/SignOut.jsx'
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import DeleteProfileBtn from './Components/Buttons/DeleteProfileBtn';
import SignOutBtn from './Components/Buttons/SignOutBtn';
import AdminSidePanel from './Components/Admin/Admin Comp/AdminSidePanel';
function App() {
 
   return (
    <div className="App">
   <AdminSidePanel/>
    </div>
  );
}

export default App;
