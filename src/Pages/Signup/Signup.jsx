import React from "react";
import { useState } from "react";
import bot from "./../../Assests/chatbot.png";
import "./signup.css";
import Header from "../../Components/Header/HeaderWithoutBtns";
import Footer from "../../Components/Footer/Footer";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const Signup = () => {

  const history=useNavigate();

  const [name, setName] = useState("");
  const [studentid, setStId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirm_password, setComPass] = useState("");

  const submit = (e) => {
    e.preventDefault();
    
    try{
        axios.post("http://localhost:3001/Signup", {
        name,
        studentid,
        username,
        email,
        password,
        comfirm_password,
      })

      .then(res=>{
        if(res.data=="exist"){
            alert("user already exists")
            
        }

        else if(res.data=="not exist"){
            history("/Login", {state:{id:email}})
        }
    })

    .catch(e=>{
        alert("wrong details")
        console.log(e);
    })
    }

    catch(e){
        console.log(e);
    }
    
    /*  .then((result) => console.log(result))
      .catch((err) => console.log(err));*/
  };

  return (
    <div className="signup-form-container">
      <div className="signup-Header">
        <Header />
      </div>
      <div className="sinup-Form">
        <table>
          <tr>
            <td>
              <form className="signup-form" action="POST" onSubmit={submit}>
                <label htmlFor="name">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  placeholder="Enter your name"
                  id="name"
                  name="name"
                />
                <label htmlFor="studentid">Student ID</label>
                <input
                  value={studentid}
                  onChange={(e) => setStId(e.target.value)}
                  type="studentid"
                  placeholder="Enter your Student ID number"
                  id="studentid"
                  name="studentid"
                />
                <label htmlFor="username">User name</label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="username"
                  placeholder="username"
                  id="username"
                  name="username"
                />
                <label htmlFor="email">Email Address</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="youremail@gmail.com"
                  id="email"
                  name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="********"
                  id="password"
                  name="password"
                />
                <label htmlFor="comfirm_password">Comfirm Password</label>
                <input
                  value={comfirm_password}
                  onChange={(e) => setComPass(e.target.value)}
                  type="comfirm_password"
                  placeholder="********"
                  id="comfirm_password"
                  name="comfirm_password"
                />
                <button className="sinup-Btn" onClick={submit} type="submit">
                  Signup
                </button>

                <tr>
                  <button className="signup-txt">
                    Already have an Account.
                  </button>
                  <Link to="/Login" className="signup-btn-link">
                    Login
                  </Link>
                </tr>
              </form>
            </td>
            <td className="signup-left">
              <img className="signup-bot" src={bot}></img>
            </td>
          </tr>
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
