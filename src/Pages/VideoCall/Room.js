import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Link } from "react-router-dom";
import "./room.css";

const Room = () => {
  const { roomId } = useParams();
  const videoRef = useRef();
  const socket = io('http://localhost:5000');

  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Connect to the WebSocket server
    socket.current = io('http://localhost:5000'); // Replace with your server URL

    // Join the room
    socket.current.emit('joinRoom', { roomId });

    // Access user's media and display it in the video element
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;

        // Send the stream to other participants (signaling server)
        socket.current.emit('newUser', { roomId, stream });
      });

    return () => {
      // Clean up resources when leaving the room
      socket.current.disconnect();
    };
  }, [roomId]);

  const toggleMute = () => {
    const tracks = videoRef.current.srcObject.getAudioTracks();
    tracks.forEach((track) => {
      track.enabled = !isMuted;
    });
    setIsMuted(!isMuted);
  };

  const endCall = () => {
    console.log('End Call button clicked'); // Check if this message appears in the console
  
    // Notify other participants that the call is ending
    socket.current.emit('endCall', { roomId });
  
    // Perform any necessary cleanup, such as stopping video and audio tracks
    const stream = videoRef.current.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => {
        console.log('Stopping track:', track.label); // Check if tracks are being stopped
        track.stop();
      });
    }
  };

  return (
    <div className='room-center'>
      <div>
      <h2>Room {roomId}</h2>
      <video ref={videoRef} autoPlay></video>
      </div>
      
    <div className='endbtn'>
      {/* End Call Button */}
      <Link to="/Homepage" onClick={endCall} className='roombtn'>End Call</Link>

      </div>
    </div>
  );
};

export default Room;
