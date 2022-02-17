import React, { createContext, useState } from "react";

export const PostContext = createContext();

const PostContextProvider = (props) => {
  let starterPosts = [
    {
      input:
        "Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien",
      imgUrl:
        "https://images.unsplash.com/photo-1641943054490-908178d0827f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      userid: 5,
      username: "Max Mustermann",
    },
    {
      input: "Nicht einmal von der allmächtigen Interpunktion werden die",
      imgUrl:
        "https://images.unsplash.com/photo-1642024310844-85319dbf2817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      userid: 6,
      username: "Hans",
    },
    {
      input: "Eines Tages aber beschloß eine kleine Zeile Blindtext,",
      imgUrl:
        "https://images.unsplash.com/photo-1642013139875-5d355bf312de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userid: 7,
      username: "Franz",
    },
    {
      input:
        "Der große Oxmox riet ihr davon ab, da es dort wimmele von bösen Kommata",
      imgUrl:
        "https://images.unsplash.com/photo-1641996437783-14768819c2ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      userid: 8,
      username: "Jesus",
    },
  ];

  let localStoragePosts = JSON.parse(localStorage.getItem("posts"));
  console.log("localStoragePosts", localStoragePosts);

  const [posts, setPosts] = useState(localStoragePosts || starterPosts);
  const addPost = (post) => {
    // in posts useState hinzufügen
    let allPosts = [...posts, post];
    setPosts(allPosts);
    localStorage.setItem("posts", JSON.stringify(allPosts));
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {props.children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
