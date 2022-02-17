import React, { useState, useContext } from "react";
import Stories from "./stories/Stories";
import MessageSender from "./messagesender/MessageSender";
import Post from "./post/Post";
import { v4 as uuidv4 } from "uuid";
import { PostContext } from "../../contexts/PostContext";

function Feed() {
  function createPosts() {
    return posts
      .slice(0)
      .reverse()
      .map((post) => (
        <Post
          key={uuidv4()}
          postImage={post.imgUrl}
          message={post.input}
          profilePic={`https://randomuser.me/api/portraits/men/${post.userid}.jpg`}
          username={post.username}
        />
      ));
  }

  const { posts } = useContext(PostContext);

  return (
    <div className="feed">
      <Stories />
      <MessageSender />

      {createPosts()}
    </div>
  );
}

export default Feed;
