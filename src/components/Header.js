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
                    top: "0",
                    fontFamily: "sans-serif"
                }}
            >
                <p>{this.props.titulo.toUpperCase()}</p>
            </div>
        );
    }
}

export default Header;
