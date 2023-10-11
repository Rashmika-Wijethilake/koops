import React, { useState } from 'react';
import './CreateStudyGroup.css';
import cancelButton from './../../Assests/cancel.png';
import groupdAdd from './../../Assests/addToGroup.png';
import koopnew from './../../Assests/koopnew.png';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function CreateStudyGroup() {
  const [groupName, setGroupName] = useState('');
  const [memberData, setMemberData] = useState({ email: '' });
  const [groupMembers, setGroupMembers] = useState('');
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  const handleAddMember = () => {
    if (groupName.trim() !== '' && memberData.email.trim() !== '') {
      // Create a new group object
      const newGroup = {
        groupName: groupName,
        members: [...groups[0]?.members || [], memberData], // Add the memberData to the first group (index 0) or create a new group if no groups exist
      };
      setGroups([newGroup, ...groups.slice(1)]); // Add the new group to the beginning of the groups array

      // Clear input fields
      setGroupName('');
      setMemberData({ email: '' });
    }
  };

  // Function to create a group and redirect to the StudyGroup page
 
  const createGroup = () => {
    // Implement logic to create a group
    const newGroup = {
      id: Date.now(),
      name: groupName,
      members: groupMembers.split(',').map(member => member.trim()),
    };
    saveGroupToLocalStorage(newGroup);
  };
  
  const saveGroupToLocalStorage = (group) => {
    const existingGroups = JSON.parse(localStorage.getItem('groups')) || [];
    existingGroups.push(group);
    localStorage.setItem('groups', JSON.stringify(existingGroups));
  };

 

  return (
    <div className="csg-mainContainer">
      <div className='csg-uppperDiv'>
        <div className='koopnew'>
          <img src={koopnew} className='koopnew' alt="Koopnew"/>
        </div>

        <div className='div-csg-heading'>
          <img src={groupdAdd} alt="Group Add Icon"/> <span className='csg-mainheading'>Create Study Group</span>
        </div>

        <div>
          <Link to='/Homepage'><img src={cancelButton} className='csg-closeing' alt="Close" /></Link>
        </div>
      </div>

      <form className='csg-form'>
        <label>Group Name:
          <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
        </label>

        {/* <label>
        Add Members: <input type="text" value={memberData.email} placeholder="Student Id" onChange={(e) => setMemberData({ ...memberData, email: e.target.value })} />
        </label> */}

        {/* <button type="button" onClick={handleAddMember} className="AM-button">
          Add Member
        </button> */}

        <div className='container-admember'>
          {groups.map((group, index) => (
            <div key={index}>
              <h3 >Group Name: {group.groupName}</h3>
              <tr>
                {group.members.map((member, memberIndex) => (
                  <tr key={memberIndex}className='gpname'>
                    <strong>Email:</strong> {member.email}
                  </tr>
                ))}
              </tr>
            </div>
          ))}
        </div>

        <div>
        <Link to="/Studygroups" className='creatButton' onClick={createGroup}>Create Group</Link>   
        </div>

      </form>

      {/* <div>
      <input
        type="text"
        placeholder="Group Name"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Members (comma-separated)"
        value={groupMembers}
        onChange={(e) => setGroupMembers(e.target.value)}
      />
    </div> */}
    </div>
  );
}

export default CreateStudyGroup;
