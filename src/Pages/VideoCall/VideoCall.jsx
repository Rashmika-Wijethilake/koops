import React, { useState, useEffect } from 'react';
import SimplePeer from 'simple-peer';
import { useParams,useNavigate } from 'react-router-dom';


const VideoCall = () => {
  const { roomId, userId } = useParams();
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [peer, setPeer] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  
  const navigate = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    // Initialize WebRTC and get local video stream
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setLocalStream(stream);

        // Set up WebRTC peer connection
        const p = new SimplePeer({ initiator: false, stream });
        setPeer(p);

        p.on('stream', (remoteStream) => {
          setRemoteStream(remoteStream);
        });

        // Handle peer disconnection
        p.on('close', () => {
          setLocalStream(null);
          setRemoteStream(null);
          setIsMuted(false); // Reset mute state when the call ends
          
          // Navigate to the home page when the call ends
          navigate.push('/');
        });
      })
      .catch((error) => {
        console.error('Error accessing media devices:', error);
      });
  }, [roomId, userId, navigate]);

  const endCall = () => {
    if (peer) {
      peer.destroy(); // Close the WebRTC connection
    }
  };

  const toggleMute = () => {
    if (localStream) {
      const tracks = localStream.getAudioTracks();
      tracks.forEach((track) => {
        track.enabled = !isMuted;
      });
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      <h2>Room: {roomId}</h2>
      <h3>User ID: {userId}</h3>
      <video ref={(ref) => (ref ? (ref.srcObject = localStream) : null)} autoPlay muted />
      <video ref={(ref) => (ref ? (ref.srcObject = remoteStream) : null)} autoPlay />

      <button onClick={endCall}>End Call</button>
      <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
    </div>
  );
};

export default VideoCall;
