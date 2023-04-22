import React from "react";
import { useState } from "react";
import bot from './../../Assests/chatbot.png';
import './login.css';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }
    
    return(
        
        <diV className="form-container">
            
            <table>
                <tr>
                    <td className="tdone">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <label htmlFor="email">Email Address</label>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                            <label htmlFor="Password">Password</label>
                            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                            <p><button className="Btnl" type="submit">Login</button></p>

                            <div className="fdivl">
                            <a href="" className="linktwo" >Forgot Password?</a>
                            <button className="txt">Create new Account.</button><a href="" className="linktwo">Signup</a>
                            </div>
                            
                        </form>
                    </td>
                    <td className="tdtwo">
                    <img className="bot" src={bot}></img>
                    </td>
                </tr>
            </table>
        </diV>
    )
}


