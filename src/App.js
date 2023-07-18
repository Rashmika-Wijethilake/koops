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
import Sidebar from './Components/SuperAdmin/Sidebar_SuperAdmin/Sidebar'
import Dashboard from './Components/SuperAdmin/Dashboard_SuperAdmin/Dashboard'
import StudyGroupEdit from './Components/StudyGroup/StudyGroupEdit';
import Studygroups from './Components/StudyGroup/Studygroups';
import VerifyEmail from './Components/VerifyEmail/VerifyEmail';
import Accountdelete from './Components/confirmdelete/Accountdelete';
import Confirmdelete from './Components/confirmdelete/Confirmdelete';
import ForgotPassword from './Components/Forgotpassword/ForgotPassword';
import Verification from './Components/Forgotpassword/Verification';
import { addStudent } from './Components/EditProfile/addstudent';
import EditProfile from './Components/EditProfile/EditProfile';
import editprofile from './Components/EditProfile/EditProfile';
import CreateStudyGroup from './Components/StudyGroup/CreateStudyGroup/CreateStudyGroup';
import MeetingRecords from './Components/MeetingRecords/MeetingRecords';



function App() {
 
   return (
    <div className="App">
   <Signup/>

  
    </div>
  );
}

export default App;
