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



// import Sidebar from './Components/SuperAdmin/Sidebar_SuperAdmin/Sidebar'
// import Dashboard from './Components/SuperAdmin/Dashboard_SuperAdmin/Dashboard'
// import AdminSidePanel from './Components/Admin/Admin Comp/AdminSidePanel';
// import AdminDashboard from './Components/Admin/AdminDashboard/AdminDashboard';
// import StudentDetailsUpBox from './Components/Admin/StudentDetailsUpdated/StudentDetailsUpdatedAdmin';
// import StudentDetailsUpdatedAdmin from './Components/Admin/StudentDetailsUpdated/StudentDetailsUpdatedAdmin';
// import StudentRemoved from './Components/Admin/StudentRemoved/StudentRemoved';
// import ResetStudent from './Components/SuperAdmin/ResetStudentDetails.jsx/ResetStudent';
// import Removingstudent from './Components/SuperAdmin/Removingstudent/Removingstudent';




function App() {
 
   return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<CreateStudyGroup/>}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/Signup" Component={Signup}/>
        <Route path="/Homepage" Component={Homepage}/>
        <Route path="/Editprofile" Component={Editprofile}/>
        <Route path="/Accountdelete" Component={Accountdelete}/>
        <Route path="/SignOut" Component={SignOut}/>
<<<<<<< HEAD
        <Route path="/CreateStudyGroup" Component={CreateStudyGroup}/>
        <Route path="/StudyGroupEdit" Component={StudyGroupEdit}/>
        <Route path="/Studygroups" Component={Studygroups}/>       
                 
=======
        <Route path='Forgotpassword' Component={ForgotPassword}/>
               
>>>>>>> 9c6da86553a20e104867db89e18b413acfaffbbe

      </Routes>
      </BrowserRouter>

    </div>
    

  );
}

export default App;
