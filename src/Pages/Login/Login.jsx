import React from "react";
import { useState } from "react";
import bot from './../../Assests/chatbot.png';
import './login.css';
import Footer from "../../Components/Footer/Footer";
import HeaderWithoutBtns from "../../Components/Header/HeaderWithoutBtns";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


export const Login = () => {

    const history=useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3001/", {
                email,password
            })

            .then(res=>{
                if(res.data=="exist"){
                    history("/Homepage", {state:{id:email}})
                }

                else if(res.data=="not exist"){
                    alert("user have not sign up")
                }
            })

            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }

        catch(e){
            console.log(e)

        }
    }
    
    return(
        
        <div>
            <div className="Header">
            <HeaderWithoutBtns/>
            </div>
            <div className="lg-form-container">
            <div className="lg-Form">
            <table>
                <tr>
                    <td>
                        <form action="POST" className="login-form" onSubmit={submit}>
                            <label htmlFor="email">Email Address</label>
                            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                            <label htmlFor="Password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                            <button onclick={submit} className="lg-btn" type="submit">Login</button>

                            <div className="lg-line-height">
                            <Link to="/ForgotPassword" className="lg-link-fg" >Forgot Password?</Link>
                            <button className="lg-txt">Create new Account.</button><Link to="/Signup" className="lg-link-fg">Signup</Link>
                            </div>
                            
                        </form>
                    </td>
                    <td className="lg-left">
                        <img className="lg-bot" src={bot}></img>
                    </td>
                </tr>
            </table>
            </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}


