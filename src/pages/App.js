import React, { Component } from "react";
import Header from "../components/Header";

class App extends Component {
  state = { nombre: "Jose" };

  handleClick = () => {
    if (this.state.nombre === "Jose") {
      this.setState({ nombre: "Juan" });
    } else if (this.state.nombre === "Juan") {
      this.setState({ nombre: "Jose" });
    }
  };

  render() {
    return (
      <div className="main-container">
        <Header />
        <div className="Bienvenida">
          <h1>Hola React</h1>
          <h2>Ejercicios con React</h2>
          <h3 style={{ color: "green" }}>{this.state.nombre}</h3>
          <button onClick={this.handleClick}>Cambiar Nombre</button>
        </div>
      </div>
    );
  }
}

export default App;
