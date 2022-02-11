import React from "react";
import "./Stories.css";
import Story from "./Story";

function Stories() {
  return (
    <div className="stories">
      {/*Stories from my friens*/}
      <Story
        image="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        profileImg="https://randomuser.me/api/portraits/women/67.jpg"
        title="Kylie Beck"
        alt=""
      />
      <Story
        image="https://cdn.wallpapersafari.com/92/85/ZyvVtQ.jpg"
        profileImg="https://randomuser.me/api/portraits/women/79.jpg"
        title="Lillian Graves"
        alt=""
      />
      <Story
        image="https://www.nawpic.com/media/2020/wallpaper-for-phone-nawpic-1.jpg"
        profileImg="https://randomuser.me/api/portraits/men/7.jpg"
        title="Nathan Payne"
        alt=""
      />
      <Story
        image="https://wallpapers.com/images/high/pennywise-phone-wallpaper-375i129o4awv72he.jpg"
        profileImg="https://randomuser.me/api/portraits/women/64.jpg"
        title="Melinda Wade"
        alt=""
      />
      <Story
        image="https://wallpaper.dog/large/784202.jpg"
        profileImg="https://randomuser.me/api/portraits/men/78.jpg"
        title="Stephen Grant"
      />
    </div>
  );
}

export default Stories;
