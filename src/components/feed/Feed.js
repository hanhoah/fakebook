import React, { useState, useEffect } from "react";
import Stories from "./stories/Stories";
import MessageSender from "./messagesender/MessageSender";
import Post from "./post/Post";

function Feed() {
  //const [posts, setPosts] = useState([]);
  const posts = JSON.parse(localStorage.getItem("posts"));

  function createPosts() {
    return posts
      .slice(0)
      .reverse()
      .map((post) => (
        <Post
          postImage={post.imgUrl}
          message={post.input}
          profilePic={`https://randomuser.me/api/portraits/men/${post.userid}.jpg`}
          username={post.username}
        />
      ));
  }

  useEffect(() => {
    console.log("From Feed.js: Use Effect ran");
  });

  return (
    <div className="feed">
      <Stories />
      <MessageSender />

      {createPosts()}

      <Post
        postImage="https://images.unsplash.com/photo-1497083924848-a8a88f919070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIzMXxfaGItZGw0US00VXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        profilePic="https://randomuser.me/api/portraits/men/44.jpg"
        message="Hello I am Post 4"
        username="Detlef"
      />
    </div>
  );
}

export default Feed;
