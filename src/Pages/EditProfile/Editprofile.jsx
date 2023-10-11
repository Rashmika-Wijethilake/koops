import React from "react";
import Footer from '../../Components/Footer/Footer';
import womanImage from './../../Assests/woman.png';
import CancelBtn from '../../Components/Buttons/CancelBtn';
import './editprofile.css'
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Editprofile() {

  const [emailToEdit, setEmailToEdit] = useState('');
  const [name, setName] = useState('');
  const [studentid, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [comfirm_password, setComfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  // const { id } = useParams();

  // useEffect(() => {
  //   // Fetch user data based on the 'id' from your API or user session
  //   // and set the initial state with the fetched data
  //   axios.get(`http://localhost:3001/get-user/${id}`)
  //     .then((response) => {
  //       const userData = response.data; // Assuming your API returns user data as an object
  //       setName(userData.name);
  //       setEmailToEdit(userData.email);
  //       setStudentId(userData.studentid);
  //       // Set other fields as needed
  //     })
  //     .catch((error) => {
  //       console.error('Failed to fetch user data:', error);
  //     });
  // }, [id]);
  const handleEditUser = () => {
    console.log('Updating user data:', { name, studentid, password, comfirm_password }); // Check the data being sent
  
    axios
      .put(`http://localhost:3001/edit-user/${emailToEdit}`, {
        name,
        studentid,
        password,
        comfirm_password,
      })
      .then((response) => {
        console.log('Response from backend:', response.data); // Check the response from the backend
  
        if (response.status === 200) {
          setMessage(response.data.message);
        } else {
          setMessage('User data update failed.');
        }
      })
      .catch((error) => {
        console.error('Error during user data update:', error);
        setMessage('User data update failed.');
      });
  };
  


    return (
        <div>
          <div className="container-editprofile">
              <div className='infor_holder'>
                <div>
                  <img src={womanImage}/>
                </div>
              
                <div className="info-hold-text">
                  <h1>{name}</h1>
                  <h3>{studentid}</h3>
                </div>
              </div>
         
            <form className="formstudent"  action="POST">
    

              <label htmlFor="name">Name              
                <input type="text" id="name" name="name" placeholder="Enter your name " value={name} onChange={(e) => setName(e.target.value)} required className='inputs'/>
              </label>
    
              <label htmlFor="email">Email
                <input type="email" id="email" name="email" placeholder="Enter your email" value={emailToEdit} onChange={(e) => setEmailToEdit(e.target.value)} required  className='inputs'/>
              </label>
        
              <label htmlFor="studentId">Student ID
                <input type="text" id="studentId" name="studentId" placeholder="Enter your student ID" value={studentid} onChange={(e) => setStudentId(e.target.value)} required className='inputs' />
              </label>
    
              {/* <label htmlFor="username">User name
                <input type="text" id="username" name="username" placeholder="Enter your username" value={formData.username} onChange={handleChange} required className='inputs' />
              </label> */}
    
              <label htmlFor="password">Password
                <input type="password" id="username" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}  required className='inputs' />
              </label>
                
              <label htmlFor="password">Confirm password
                <input type="password" id="username" name="confirm_password" placeholder="Confirm your password" value={comfirm_password} onChange={(e) => setComfirmPassword(e.target.value)} required className='inputs' />
              </label>
    
              <div className="buttons">
                <button onClick={handleEditUser} className="edit-btn">Save</button>
                <Link to="/Homepage"><CancelBtn /></Link>
              </div>

              
            </form>
          </div>
         
          <div>
          <Footer/>  
          </div>
        
        </div>
        
    );
}