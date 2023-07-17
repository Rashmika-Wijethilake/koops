import React from 'react';
import './CreateStudyGroup.css';
import img1 from './../../../Assests/account.png';
import threeDoted from './../../../Assests/threedot.png';
import cancelButton from './../../../Assests/cancel.png';
import groupdAdd from './../../../Assests/addToGroup.png';
import search from './../../../Assests/search.png';
import woman from './../../../Assests/woman.png';
import koopnew from './../../../Assests/koopnew.png';

 
function CreateStudyGroup() {
  return (
    
    <div className="mainContainer">
      <div className='uppperDiv'>
        <div className='search'>

        <img src={search} className='search'/>
        </div>


        <div className='koopnew'>

        <img src={koopnew} className='koopnew'/>
        </div>
        
    <img src={groupdAdd} className='fimg'/>  <span className='mainheading'>Create Study Group</span> <img src={cancelButton} className='closeimg'/>
    </div>
      <div className='contentHolder'>
        <div className='holders'>
        <span className='mainNames'>Group name</span> <input className='inputFields firtinput'  placeholder='Example group'/>

        </div>
        <div className='holders'>
        <span className='mainNames'>Add member</span> <input className='inputFields' placeholder='Index number'/>

        </div>
        

      </div>
       
      <p className='addmember'>Added members</p>
    
    <div className='adduserholder'>
      <div className='innerHolders'>
      <img src={img1} className = "img1"/>
      <span className='theIndexNumber'>StudentU1</span> <span className='addedMembersName'>125@gmail.com</span> <img src={threeDoted} className="threeDoted"/>
      </div>
    </div>

    <div className='adduserholder'>
      <div className='innerHolders'>
      <img src={woman} className = "woman"/>
      <span className='theIndexNumber'>StudentU2</span> <span className='addedMembersName'>5555@gmail.com</span> <img src={threeDoted} className="threeDoted"/>
      </div>
    </div>


   

    <div className='secondholder'>
    <div className='adduserholder'>
      <div className='innerHolders'>
      <img src={img1} className = "img1"/> <span className='theIndexNumber'>StudentU3</span><span className='addedMembersName'>123@gmail.com</span>  <button className='addbuuton'>Add</button>
      </div>
    </div>


    <div className='adduserholder'>
      <div className='innerHolders'>
      <img src={woman} className = "woman"/><span className='theIndexNumber'>StudentU4</span> <span className='addedMembersName'>3687@gmail.com</span>  <button className='addbuuton'>Add</button>
      </div>
    </div>


    <div className='adduserholder'>
      <div className='innerHolders'>
      <img src={img1} className = "img1"/> <span className='theIndexNumber'>StudentU5</span><span className='addedMembersName'>12@gmail.com</span>  <button className='addbuuton'>Add</button>
      </div>
    </div>

    <div className='adduserholder'>
      <div className='innerHolders'>
      <img src={woman} className = "woman"/><span className='theIndexNumber'>StudentU6</span> <span className='addedMembersName'>3687@gmail.com</span>  <button className='addbuuton'>Add</button>
      </div>
    </div>

    <div className='adduserholder'>
      <div className='innerHolders'>
      <img src={img1} className = "img1"/> <span className='theIndexNumber'>StudentU7</span><span className='addedMembersName'>12@gmail.com</span>  <button className='addbuuton'>Add</button>
      </div>
    </div>

    <div className='adduserholder'>
      <div className='innerHolders'>
      <img src={woman} className = "woman"/><span className='theIndexNumber'>StudentU8</span> <span className='addedMembersName'>3687@gmail.com</span>  <button className='addbuuton'>Add</button>
      </div>
    </div>



 
    
    </div>
    <div className='ntunHolder'>
    <button className='creatButton'>Create</button>
    </div>

    </div>
  );
}

export default CreateStudyGroup;