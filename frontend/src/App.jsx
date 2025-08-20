import { useState } from "react";
import "./App.css";
import io from 'socket.io-client';

const socket = io("http://localhost:5173");

const App = () => {
  const [joined, setJoined] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const joinRoom = () =>{
    console.log(roomId, userName);
  }

  if(!joined) {
    return (
    <div className="join-container">
      <div className="join-form">
        <h1>Join Code Room</h1>
        <input 
        type="text" 
        placeholder="Room Id"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        />
        <input 
        type="text" 
        placeholder="Your Nme"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>
  </div>
    );
  };
  return <div>User Joined</div>;
};

export default App;
