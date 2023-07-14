import logo from './logo.svg';
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
import AdminSidePanel from './Components/Admin/Admin Comp/AdminSidePanel';
import Verification from './Components/Forgotpassword/Verification';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import HeaderWithAdminGreet from './Components/Header/HeaderWithAdminGreet';
import Header from './Components/Header/Header';
import StudentDetailsUpdated from './Components/Admin/StudentDetailsUpdated/StudentDetailsUpdatedAdmin';
import StudentDetailsUpdatedAdmin from './Components/Admin/StudentDetailsUpdated/StudentDetailsUpdatedAdmin';
import StudentDetailsUpBox from './Components/Admin/StudentDetailsUpdated/StudentDetailsUpBox';
import ForgotPassword from './Components/Forgotpassword/ForgotPassword';



function App() {
 
   return (
    <div className="App">
   <ForgotPassword/>

  
    </div>
  );
}

export default App;
