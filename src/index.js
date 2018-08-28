import React, { Component } from "react";
import ReactDOM from "react-dom";
// Estilos css
import "./styles.css";

export default class Welcome extends React.Component {
  render() {
    return (
      <div className="Bienvenida">
        <h1>Hola React</h1>
        <h2>Ejercicios con React</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Welcome />, rootElement);
