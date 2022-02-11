import React from "react";
import "./SidebarRow.css";

function SidebarRow({ src, title, Icon }) {
  return (
    <div className="sidebarRow">
      {src && <img className="avatar" src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
