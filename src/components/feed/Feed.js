import React, { useState } from "react";
import Stories from "./stories/Stories";
import MessageSender from "./messagesender/MessageSender";
import Post from "./post/Post";

// let PostModel = require("../../db/post.model");

// console.log(PostModel);
/*
PostModel.find((err, posts) => {
  if (err) console.log(err);
  else {
    console.log(posts);
  }
});

*/

function Feed() {
  //const [posts, setPosts] = useState([]);
  const posts = JSON.parse(localStorage.getItem("posts"));
  console.log("post from feed.js", posts);

  function createPosts(post) {
    console.log("create post" + post);
  }

  return (
    <div className="feed">
      <Stories />
      <MessageSender />
      {console.log("posts ist ", typeof posts)}
      <Post
        postImage="https://images.unsplash.com/photo-1643996549856-102ea1121a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8X2hiLWRsNFEtNFV8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        profilePic="https://randomuser.me/api/portraits/men/42.jpg"
        message="Hello I am Post 1"
        username="Hans"
      />
      <Post
        profilePic="https://randomuser.me/api/portraits/men/68.jpg"
        postImage="https://images.unsplash.com/photo-1644612105654-b6b0a941ecde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8X2hiLWRsNFEtNFV8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        message="Hello I am Post 2"
        username="Frans"
      />
      <Post
        profilePic="https://randomuser.me/api/portraits/men/43.jpg"
        message="Hello I am Post 3"
        username="Lanz"
      />
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
