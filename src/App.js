import {BrowserRouter, Routes, Route,  } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { Signup } from './Pages/Signup/Signup';
import LandingPage from './Pages/LandingPage/LandingPage';
import SignOut from './Pages/SignOut/SignOut.jsx'
import Homepage from './Pages/Homepage/Homepage';
import Editprofile from './Pages/EditProfile/Editprofile';
import CreateStudyGroup from './Pages/CreateStudyGroup/CreateStudyGroup';
import StudyGroupEdit from './Pages/Study Groups/StudyGroupEdit';
import Accountdelete from './Pages/DeleteAccount/Accountdelete';
import Studygroups from './Pages/Study Groups/Studygroups';
import DeleteAccount from './Pages/DeleteAccount/DeleteAccount';
import Confirmdelete from './Pages/DeleteAccount/Confirmdelete';
import SuccessfullyDeletedAccount from './Pages/DeleteAccount/SuccessfullyDeletedAccount';


import CreateRoom from './Pages/VideoCall/CreateRoom';
import JoinRoom from './Pages/VideoCall/JoinRoom';
import Room from './Pages/VideoCall/Room';
import GroupPage from './Pages/VideoCall/GroupPage';
import MyGroups from './Pages/VideoCall/MyGroups';

// import ForgotPassword from './other/Forgotpassword/ForgotPassword'
// import Verification from './other/Forgotpassword/Verification';
// import AccountVerified from './other/AccountVerified/AccountVerified';
// import ChangedPassword from './other/ChangedPassword/ChangedPassword';
// import MeetingRecords from './other/MeetingRecords/MeetingRecords'
// import VerifyEmail from './other/VerifyEmail/VerifyEmail'


// import Sidebar from './Components/SuperAdmin/Sidebar_SuperAdmin/Sidebar'
// import Dashboard from './Components/SuperAdmin/Dashboard_SuperAdmin/Dashboard'
// import ResetStudent from './Components/SuperAdmin/ResetStudentDetails.jsx/ResetStudent';
// import Removingstudent from './Components/SuperAdmin/Removingstudent/Removingstudent';
// import Studentdeatailsupdate from './Components/SuperAdmin/Studentdetails/Studentdeatailsupdate';

// import AdminSidePanel from './Components/Admin/Admin Comp/AdminSidePanel';
// import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
// import StudentDetailsUpBox from './Components/Admin/StudentDetailsUpdated/StudentDetailsUpBox';
// import StudentDetailsUpdatedAdmin from './Components/Admin/StudentDetailsUpdated/StudentDetailsUpdatedAdmin';
// import StudentRemoved from './Components/Admin/StudentRemoved/StudentRemoved';





function App() {
 
   return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>

        {/* backend */}
        <Route index element={<Homepage/>}/>
        <Route path="/LandingPage" Component={LandingPage}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/Signup" Component={Signup}/>
        <Route path="/SignOut" Component={SignOut}/>
        <Route path="/Homepage" Component={Homepage}/>
        <Route path="/Editprofile" Component={Editprofile}/>
        <Route path="/Accountdelete" Component={Accountdelete}/>
        <Route path="/DeleteAccount" Component={DeleteAccount}/>   
        <Route path="/Confirmdelete" Component={Confirmdelete}/> 
        <Route path="/SuccessfullyDeletedAccount" Component={SuccessfullyDeletedAccount}/> 
        <Route path="/CreateStudyGroup" Component={CreateStudyGroup}/>
        <Route path="/StudyGroupEdit" Component={StudyGroupEdit}/>
        <Route path="/Studygroups" Component={Studygroups}/> 

{/* Meeting */}
        {/* <Route path="/Home" Component={Home}/> */}
        <Route path="/CreateRoom" Component={CreateRoom}/>
        <Route path="/JoinRoom" Component={JoinRoom}/>
        <Route path="/room/:roomId" Component={Room}/> 
        <Route exact path="/groups" Component={MyGroups}/>
        <Route path="/group/:groupId" Component={GroupPage}/> 


{/* Frontend */}
        {/* <Route path="/Forgotpassword" Component={ForgotPassword}/>      
        <Route path="/Verification" Component={Verification}/>  
        <Route path="/AccountVerified" Component={AccountVerified}/>  
        <Route path="/ChangedPassword" Component={ChangedPassword}/>  
        <Route path="/MeetingRecords" Component={MeetingRecords}/>
        <Route path="/VerifyEmail" Component={VerifyEmail}/> */}


{/* superadmin Frontend  */}
        {/* <Route path="/Sidebar" Component={Sidebar}/>      
        <Route path="/Dashboard" Component={Dashboard}/>  
        <Route path="/ResetStudent" Component={ResetStudent}/>  
        <Route path="/Removingstudent" Component={Removingstudent}/>  
        <Route path="/Studentdeatailsupdate" Component={Studentdeatailsupdate}/>
        <Route path="/VerifyEmail" Component={VerifyEmail}/> */}


{/* admin Frontend  */}  
{/* 
        <Route path="/AdminSidePanel" Component={AdminSidePanel}/>      
        <Route path="/AdminDashboard" Component={AdminDashboard}/>  
        <Route path="/StudentDetailsUpdatedAdmin" Component={StudentDetailsUpdatedAdmin}/>  
        <Route path="/StudentDetailsUpBox" Component={StudentDetailsUpBox}/>  
        <Route path="/StudentRemoved" Component={StudentRemoved}/> */}

      </Routes>
      </BrowserRouter>

    </div>
    

  );
}

export default App;
