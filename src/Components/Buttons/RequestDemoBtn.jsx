import React from 'react';
import './RequestDemoBtn.css';
import { Link } from 'react-router-dom';

function RequestDemoBtn(){
return(
    <div style={{align:'center'}}>
    <Link to='/Login' className='button-RequestDemo'> Start Your Journey</Link>
  </div>
);
}
export default RequestDemoBtn;