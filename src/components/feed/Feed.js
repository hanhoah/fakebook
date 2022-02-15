import React from "react";
import Stories from "./stories/Stories";
import MessageSender from "./messagesender/MessageSender";
import Post from "./post/Post";

function Feed() {
  return (
    <div className="feed">
      <Stories />
      <MessageSender />
      {/* Enter your Post */}
      <Post
        postImage="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        profilePic="https://randomuser.me/api/portraits/men/42.jpg"
        message="Hello I am Post 1"
        username="Hans"
      />
      <Post
        profilePic="https://images.unsplash.com/photo-1589809489704-6a6a3b524023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        message="Hello I am Post 2"
        username="Frans"
      />
      <Post
        profilePic="https://randomuser.me/api/portraits/men/43.jpg"
        message="Hello I am Post 3"
        username="Lanz"
      />
      <Post
        postImage="https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        profilePic="https://randomuser.me/api/portraits/men/44.jpg"
        message="Hello I am Post 4"
        username="Detlef"
      />
    </div>
  );
}

export default Feed;
