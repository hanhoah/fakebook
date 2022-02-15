import React, { useState } from "react";
import "./MessageSender__top.css";
import { Avatar } from "@material-ui/core";

function MessageSender__top() {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const processMessage = (e) => {
    console.log("i will send your message to the DB");
    e.preventDefault();
    setInput("");
    setImgUrl("");
  };

  return (
    <div className="messageSender__top">
      <form>
        <Avatar />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="messageSender__input"
          placeholder="Was machst du gerade?"
        />
        <input
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          placeholder="Foto (optional)"
        />
        <button onClick={processMessage} type="submit">
          Hidden submit
        </button>
      </form>
    </div>
  );
}

export default MessageSender__top;
