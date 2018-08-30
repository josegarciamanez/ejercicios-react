import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        style={{
          background: "white",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          width: "100%",
          top: "0"
        }}
      >
        <p>Header Component</p>
      </div>
    );
  }
}

export default Header;
