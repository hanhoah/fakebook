import React from "react";
import "./MessageSender__bottom.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";

function MessageSender__bottom() {
  return (
    <div className="messageSender__bottom">
      <div className="messageSender__option">
        <VideoCallIcon style={{ color: "red" }} /> <h3>Live-Video</h3>
      </div>
      <div className="messageSender__option">
        <PhotoLibraryIcon style={{ color: "green" }} /> <h3>Foto/VideoCall</h3>
      </div>
      <div className="messageSender__option">
        <MoodIcon style={{ color: "#FFCC00" }} /> <h3>Gefühl/Aktivität</h3>
      </div>
    </div>
  );
}

export default MessageSender__bottom;
