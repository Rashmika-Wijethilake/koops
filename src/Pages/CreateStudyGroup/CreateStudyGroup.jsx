import React, { useState } from 'react';
import './CreateStudyGroup.css';
import cancelButton from './../../Assests/cancel.png';
import groupdAdd from './../../Assests/addToGroup.png';
import koopnew from './../../Assests/koopnew.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateStudyGroup() {
  const [groupName, setGroupName] = useState('');
  const [memberData, setMemberData] = useState({ email: '' });
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  // Function to create a group and redirect to the StudyGroup page
  const handleCreateGroup = async () => {
    try {
      // Send a POST request to create the group on the server
      await axios.post('/api/groups', { groups }); // Send the array of groups
      navigate('/Studygroups'); // Navigate to the StudyGroup page
    } catch (error) {
      console.error(error);
    }
  };

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
          <img src={cancelButton} className='csg-closeing' alt="Close" />
        </div>
      </div>

      <form className='csg-form'>
        <label>Group Name:
          <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
        </label>

        <label>
        Add Members: <input type="text" value={memberData.email} placeholder="Email" onChange={(e) => setMemberData({ ...memberData, email: e.target.value })} />
        </label>

        <button type="button" onClick={handleAddMember} className="AM-button">
          Add Member
        </button>

        <div className='container-admember'>
          {groups.map((group, index) => (
            <div key={index}>
              <h3>Group Name: {group.groupName}</h3>
              <ul>
                {group.members.map((member, memberIndex) => (
                  <li key={memberIndex}>
                    <strong>Email:</strong> {member.email}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <button className='creatButton' onClick={handleCreateGroup}>Create</button>
        </div>

      </form>
    </div>
  );
}

export default CreateStudyGroup;
