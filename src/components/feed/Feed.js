import React from "react";
import Stories from "./stories/Stories";
import MessageSender from "./messagesender/MessageSender";

function Feed() {
  return (
    <div className="feed">
      <Stories />
      <MessageSender />
      {/* Enter your Post */}
    </div>
  );
}

export default Feed;
