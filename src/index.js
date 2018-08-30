import React, { Component } from "react";
import ReactDOM from "react-dom";
// Estilos css
import "./styles.css";
import App from "./pages/App";

class Index extends Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
