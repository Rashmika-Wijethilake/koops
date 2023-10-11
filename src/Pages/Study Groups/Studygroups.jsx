import Footer from "../../Components/Footer/Footer";
import KOOPS from "./../../Assests/Koops Big Image.png";
import GroupIcon from "./../../Assests/group_icon.png";
import AddIcon from "./../../Assests/plusIcon.png";
import "./Studygroup.css";
import Navbar from "../../Components/ProfileNavbar/Navbar";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import deleteButton from './../../Assests/delete.png';
import menuvertical from './../../Assests/menuvertical.png'
export default function Studygroups() {
  const [groups, setGroups] = useState([]);
  const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];

  // Function to fetch study groups from the server
  const fetchGroups = async () => {
    try {
      const response = await axios.get('/api/groups'); // Correct API endpoint
      setGroups(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Call fetchGroups when the component mounts
  useEffect(() => {
    fetchGroups();
  }, []);

  const location = useLocation();


  const deleteGroup = (group) => {
    // Find the index of the group in savedGroups
    const groupIndex = savedGroups.findIndex((g) => g.id === group.id);

    // If found, remove the group from savedGroups
    if (groupIndex !== -1) {
      savedGroups.splice(groupIndex, 1);

      // Update localStorage with the modified savedGroups
      localStorage.setItem('groups', JSON.stringify(savedGroups));

      // Force a re-render by setting groups state with the modified data
      setGroups([...savedGroups]);
    }
  };

    // Function to clear local storage data
    const clearLocalStorageData = () => {
      localStorage.clear();
    }

  return (
    <div className="sg-page-container">
      <Navbar />
      <div>
        <div className="sg-texts">
          <h1>My Study Groups</h1>
        </div>

        <div className="sg-mid">
          <div>
            {/* <img src={GroupIcon} alt="Koops" /> */}
            <div>          
              <table className="grptable">
                {savedGroups.map((group) => (

                  <td key={group.id} className="tdprop">
                   <div>
                   <Link to="/JoinRoom" className="grptext">{group.name}</Link>
                   </div>                 
                    <div classNmae="btn-dlt">
                    <Link onClick={() => deleteGroup(group)}><img src={deleteButton} className='dlt-btn' alt="Close" /></Link>
                    </div>               
                  </td>
                ))}
              </table>
          </div>

          </div>

          <div>
            <Link to='/CreateStudyGroup' className="hp-addicon-btn">
              <img className="hp-addicon" src={AddIcon} alt="Add Icon" />
            </Link>
          </div>

          <div>
            <img className='sg-imageContent' src={KOOPS} alt="Koops" />
          </div>


          {/* <div>
            <h1>Study Group Page</h1>
            {groups.length > 0 ? (
              <div>
                {groups.map((group, index) => (
                  <div key={index}>
                    <h2>Group Name: {group.groupName}</h2>
                    <h3>Members:</h3>
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
            ) : (
              <p>No study groups available.</p>
            )}
          </div> */}

     
        </div>



        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
