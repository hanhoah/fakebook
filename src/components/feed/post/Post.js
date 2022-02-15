import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

function Post({ profilePic, postImage, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>
      <div className="post__bottom">{message}</div>

      <div className="post__image">
        <img src={postImage} />
      </div>
    </div>
  );
}

export default Post;
