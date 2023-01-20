import React from "react";
import { SideBarNavData } from "./SideNavBarData";
import "../App.css";

function SideNavBar() {
  return (
    <div className="SideNavBar">
      <ul className="SideNavBarList">
        {SideBarNavData.map((entry, index) => {
          return (
            <li
              key={index}
              id={window.location.pathname === entry.link ? "active" : "non-active"}
              className="row"
              onClick={() => {
                window.location.pathname = entry.link;
              }}
            >
              <div className="navBarIcon">{entry.icon}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideNavBar;
