import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import YouTubeIcon from "@material-ui/icons/YouTube";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="/images/fakelogo.png" />

        <div className="header__input">
          <SearchIcon />
          <input placeholder="Fakebook durchsuchen" type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <PeopleIcon fontSize="large" />
        </div>
        <div className="header__option">
          <YouTubeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Han Hoa</h4>
        </div>
        <IconButton>
          <AddIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <NotificationsIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
