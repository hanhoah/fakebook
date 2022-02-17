import React from "react";
import "./Reactions.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";

function Reactions() {
  return (
    <div className="reactions">
      <div className="reaction">
        <ThumbUpAltIcon />
        <p>Gefällt mir</p>
      </div>
      <div className="reaction">
        <ChatBubbleOutlineIcon />
        <p>Kommentieren</p>
      </div>
      <div className="reaction">
        <ShareIcon />
        <p>Teilen</p>
      </div>
    </div>
  );
}

export default Reactions;
