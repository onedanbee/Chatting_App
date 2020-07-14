import React, { Component } from "react";
// import "./HeaderMenu.scss";
var css = require("./HeaderMenu.scss");

type HeaderMenuProps = {
  test: any;
};
class HeaderMenu extends Component<HeaderMenuProps, {}> {
  render() {
    console.log(this.props.test);
    return (
      <div className="headerMenu">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>
      </div>
    );
  }
}

export default HeaderMenu;
