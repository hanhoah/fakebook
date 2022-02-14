import React from "react";
import "./MessageSender__bottom.css";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import MoodIcon from "@mui/icons-material/Mood";

function MessageSender__bottom() {
  return (
    <div>
      <VideoCallIcon style={{ color: "red" }} /> <h3>Live-Video</h3>
      <PhotoLibraryIcon style={{ color: "green" }} /> <h3>Foto/VideoCall</h3>
      <MoodIcon style={{ color: "yellow" }} /> <h3>Gefühl/Aktivität</h3>
    </div>
  );
}

export default MessageSender__bottom;
