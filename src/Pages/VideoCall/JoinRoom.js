// JoinRoom.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Joinroom.css';

const JoinRoom = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const joinRoom = () => {
    // Navigate to the room page
    navigate(`/room/${roomId}`);
  };

  return (
    <div className='j-container'>
      <h2>Join The Meeting</h2>
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
};

export default JoinRoom;
