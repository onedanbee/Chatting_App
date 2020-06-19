import React, { Component } from "react";
import "./HeaderMenu.scss";

class HeaderMenu extends Component {
  render() {
    return (
      <div className="headerMenu">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
        </ul>
      </div>
    );
  }
}

export default HeaderMenu;
