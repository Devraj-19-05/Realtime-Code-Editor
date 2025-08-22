import { useState } from "react";
import "./App.css";
import io from 'socket.io-client';

const socket = io("http://localhost:5000");

const App = () => {
  const [joined, setJoined] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");

  const joinRoom = () =>{
    if (roomId && userName) {
      socket.emit("join", { roomId, userName});
      setJoined(true);
    }
  };

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
  return <div>
    <div className="edito-container">
      <div className="sidebar">
        <div className="room-info">
          <h2>Code Room :{roomId}</h2>
          <button onClick={copyRoomId}>Copy Id</button>
        </div>
      </div></div>
  </div>;
};

export default App;
