import logo from './logo.svg';
import './App.css';
import cancleImage from './img2/cancel.png'

function App() {
  return (
     <div className='OuterDiv'>
           <img src={cancleImage} className="cancleImage"/>

           <div className='upperHolder'>
            <span className='examplegroupText'>exampleGroup</span>
            <span className='studtmeeting'>new study meeting</span>

           </div>

         <div className='memberlistHolder'>
           <span className='memberlistText'>Member list : </span> <input type="text" placeholder='Member name' className='inputfield'/>
           </div>

           <p className='meetinhistoryText'>Meeting History</p>

           <table className='thetable'   >
            <thead>
          
                <tr className='therows'>
                  <td className='mainheadtext'>Meeting Name</td>
                  <td className='mainheadtext'>Duration</td>
                  </tr>
          
            </thead>
            <tbody>
              <tr>
                <td className='mainheadtext'>Meeting 01</td>
                <td className='mainheadtext'>10.21 min</td>

              </tr>

              <tr>
                <td className='mainheadtext'>Meeting 02</td>
                <td className='mainheadtext'>50.21 min</td>

              </tr>

              <tr>
                <td className='mainheadtext'>Meeting 03</td>
                <td className='mainheadtext'>10.55 min</td>

              </tr>

              <tr>
                <td className='mainheadtext'>Meeting 04</td>
                <td className='mainheadtext'>10.21 min</td>

              </tr>

            </tbody>
           </table>
      
     </div>
  );
}

export default App;
