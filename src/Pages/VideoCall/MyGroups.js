import React from 'react';
import { Link } from 'react-router-dom';

const MyGroups = () => {
  const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];

  return (
    <div>
      <h2>My Groups</h2>
      <ul>
        {savedGroups.map((group) => (
          <li key={group.id}>
            <Link to="/JoinRoom">{group.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyGroups;
