import React from "react";
import "./MessageSender__top.css";
import { Avatar } from "@material-ui/core";

const processMessage = (e) => {
  console.log("processing your message");
  e.preventDefault();
};

function MessageSender__top() {
  return (
    <div className="messageSender__top">
      <form>
        <Avatar />
        <input
          className="messageSender__input"
          placeholder="Was machst du gerade?"
        />
        <input placeholder="Foto (optional)" />
        <button onClick={processMessage} type="submit">
          Hidden submit
        </button>
      </form>
    </div>
  );
}

export default MessageSender__top;
