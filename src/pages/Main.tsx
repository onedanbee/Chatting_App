import React, { Component } from "react";
import "./Main.scss";
import HeaderMenu from "../components/HeaderMenu";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <HeaderMenu />
      </div>
    );
  }
}

export default Main;
