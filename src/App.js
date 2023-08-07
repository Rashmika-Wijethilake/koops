import logo from './logo.svg';
import './App.css';
import { Login } from './Pages/Login/Login';
import { Signup } from './Pages/Signup/Signup';
import { useState } from 'react';
import LandingPage from './Pages/LandingPage/LandingPage';
import AccountVerified from './Components/AccountVerified/AccountVerified.jsx'
import ChangedPassword from './Components/ChangedPassword/ChangedPassword'
import SignOut from './Components/SignOut/SignOut.jsx'
import Homepage from './Pages/Homepage/Homepage';
import Sidebar from './Components/SuperAdmin/Sidebar_SuperAdmin/Sidebar'
import Dashboard from './Components/SuperAdmin/Dashboard_SuperAdmin/Dashboard'
import StudyGroupEdit from './Components/StudyGroup/StudyGroupEdit';
import Studygroups from './Components/StudyGroup/Studygroups';
import VerifyEmail from './Components/VerifyEmail/VerifyEmail';
import Accountdelete from './Components/confirmdelete/Accountdelete';
import Confirmdelete from './Components/confirmdelete/Confirmdelete';
import ForgotPassword from './Components/Forgotpassword/ForgotPassword';
import MeetingRecords from './Components/MeetingRecords/MeetingRecords';
import AdminSidePanel from './Components/Admin/Admin Comp/AdminSidePanel';
import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
import StudentDetailsUpBox from './Components/Admin/StudentDetailsUpdated/StudentDetailsUpdatedAdmin';
import StudentDetailsUpdatedAdmin from './Components/Admin/StudentDetailsUpdated/StudentDetailsUpdatedAdmin';
import StudentRemoved from './Components/Admin/StudentRemoved/StudentRemoved';
import ResetStudent from './Components/SuperAdmin/ResetStudentDetails.jsx/ResetStudent';
import {BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Removingstudent from './Components/Removingstudent/Removingstudent';
import SuccessfullyDeletedAccount from './Components/SuccessfullyDeletedAccount/SuccessfullyDeletedAccount';
import Header from './Components/Header/Header';


function App() {
 
   return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage/>}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/Signup" Component={Signup}/>
        <Route path="/Homepage" Component={Homepage}/>

      </Routes>
      </BrowserRouter>

    </div>
    

  );
}

export default App;
