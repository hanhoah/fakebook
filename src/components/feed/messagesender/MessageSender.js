import React from "react";
import "./MessageSender.css";
import MessageSender__top from "./MessageSender__top";
import MessageSender__bottom from "./MessageSender__bottom";

function MessageSender() {
  return (
    <div className="messageSender">
      <MessageSender__top />
      <MessageSender__bottom />
    </div>
  );
}

export default MessageSender;
