import React, { useState } from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import PeopleIcon from "@material-ui/icons/People";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Max Mustermann"
        src="https://randomuser.me/api/portraits/men/5.jpg"
      />
      <SidebarRow title="Freunde finden" src="" Icon={PeopleIcon} />
      <SidebarRow title="Gruppen" src="" Icon={PeopleOutlineIcon} />
      <SidebarRow title="Marketplace" src="" Icon={StorefrontIcon} />
      <SidebarRow
        title="Watch (9 neue Videos)"
        src=""
        Icon={VideoLibraryIcon}
      />
      <SidebarRow title="Erinnerungen" src="" Icon={NotificationsActiveIcon} />
      <SidebarRow title="Gespeichert" src="" Icon={BookmarkBorderIcon} />
    </div>
  );
}

export default Sidebar;
