import React from "react";
import { useState } from "react";
import bot from './../../Assests/chatbot.png';
import { Login } from "../Login/Login";
import './signup.css';
import Header from './../Header/HeaderWithoutBtns'
import Footer from "./../Footer/Footer";

export const Signup = () => {
    const [name, setName] = useState('');
    const [studentid, setStId] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [comfirm_password, setComPass] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }
    
    return(
           
        <div className="form-container">
            <div>
            <Header/>
            </div>
            
            <table>
                <tr>
                    <td className="tdone">
                        <form className="signup-form" onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input value={name} onChange={(e)=> setName(e.target.value)} type="name" placeholder="Enter your name" id="name" name="name" />
                            <label htmlFor="studentid">Student ID</label>
                            <input value={studentid} onChange={(e) => setStId(e.target.value)} type="studentid" placeholder="Enter your Student ID number" id="studentid" name="studentid" />
                            <label htmlFor="username">User name</label>
                            <input value={username} onChange={(e)=> setUsername(e.target.value)} type="username" placeholder="username" id="username" name="username" />
                            <label htmlFor="email">Email Address</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                            <label htmlFor="password">Password</label>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                            <label htmlFor="comfirm_password">Comfirm Password</label>
                            <input value={comfirm_password} onChange={(e) => setComPass(e.target.value)} type="comfirm_password" placeholder="********" id="comfirm_password" name="comfirm_password" />
                            
                            <div className="fdivs">
                            <button className="Btn" type="submit">Signup</button>
                            <button className="txt">Already have an Account.</button><a href="./Login" className="btn-linktwo">Login</a>
                            </div>
                        </form>
                    </td>
                    <td className="Stdtwo">
                        <img className="bot" src={bot}></img>
                    </td>
                </tr>
            </table>
            <div>
            <Footer/>
            </div>
            
        </div>
    )
}


