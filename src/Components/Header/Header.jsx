import React from 'react';
import "./Header.css";
import KoopsLogo from './../../Assests/Koops-icon3.png';


const Header = () =>{
<<<<<<< HEAD
      return(        
=======
   const navigate = useNavigate();
   const handleClick =() => {
    navigate ("/src/Components/Login/Login.jsx")
   }
    return(        

>>>>>>> d4021788fa11440fc0fcf0f78710882745c70e19
    <div className="Container">
        <div className = "Row">
            {/* Column1 */}
            <div className = "column">
                <div className= "imageCont">
                    <img className='imageKoopsLogo'src={KoopsLogo} alt="Koops"></img> 
                </div>  
            </div>        
            {/* Column2 */}
            <div className = "column1">
                <div className="container2">
                    <div className = "Login-ButtonContainer">
                    <button onclick="" className='LogInButton'>Login</button>
                    </div> 
            {/* Column3 */}
                    <div className = "SignUp-ButtonContainer">
                        <button onclick={()=>navigate(-1)}  className='SignUpButton'> SignUp</button>
                    </div>
                </div>            
            </div>            
        </div> 
    </div>
)
}
export default Header;