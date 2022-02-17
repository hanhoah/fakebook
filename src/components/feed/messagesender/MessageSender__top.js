import React, { useState, useEffect } from "react";
import "./MessageSender__top.css";
import { Avatar } from "@material-ui/core";

function MessageSender__top() {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [posts, setPosts] = useState([]);

  // In den LocalStorage speichern
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  });

  const processMessage = (e) => {
    // Standard Formularverhalten deaktivieren
    e.preventDefault();

    // Objekt erzeugen
    let singlepost = {
      input,
      imgUrl,
    };

    console.log("single post", singlepost);
    // in posts useState hinzufügen
    setPosts([...posts, singlepost]);

    // Formularfelder wieder leeren
    setInput("");
    setImgUrl("");
    console.log(localStorage.getItem("posts"));
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
