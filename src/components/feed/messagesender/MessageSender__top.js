import React, { useState, useContext } from "react";
import "./MessageSender__top.css";
import { Avatar } from "@material-ui/core";
import { FakebookContext } from "../../../contexts/FakebookContext";
import { PostContext } from "../../../contexts/PostContext";

function MessageSender__top() {
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // the logged in User
  const { user } = useContext(FakebookContext);
  console.log("context user ", user);
  const { addPost } = useContext(PostContext);

  console.log("addPost ist ", addPost);
  const processMessage = (e) => {
    // Standard Formularverhalten deaktivieren
    e.preventDefault();

    // Objekt erzeugen
    let singlepost = {
      input,
      imgUrl,
      userid: user.id,
      username: user.name,
    };

    console.log(singlepost);

    //addPost von Feed.js aufrufen und singlepost übergeben
    addPost(singlepost);

    // Formularfelder wieder leeren
    setInput("");
    setImgUrl("");
  };

  return (
    <div className="messageSender__top">
      <form>
        <Avatar src="https://randomuser.me/api/portraits/men/5.jpg" />
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
