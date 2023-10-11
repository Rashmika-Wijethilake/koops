// CreateRoom.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const CreateRoom = () => {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();
  const socket = io('http://localhost:5000'); // Connect to your backend server URL

  const createRoom = () => {
    // Emit an event to create a room
    socket.emit('createRoom', roomId);

    // After creating the room, navigate to the room page
    navigate(`/room/${roomId}`);
  };

  return (
    <div>
      <h2>Create a Room</h2>
      <input
        type="text"
        placeholder="Enter Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={createRoom}>Create Room</button>
    </div>
  );
};

export default CreateRoom;
