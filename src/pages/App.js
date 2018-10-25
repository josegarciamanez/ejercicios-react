import React, { Component } from "react";
import Header from "../components/Header";

class App extends Component {
    state = {
        nombre: "Jose",
        apellidos: "García"
    };

    handleClick = () => {
        if (Object.is(this.state.nombre, "Jose")) {
            this.setState({ nombre: "Juan" });
        } else if (Object.is(this.state.nombre, "Juan")) {
            this.setState({ nombre: "Jose" });
        }
        console.log(this.state);
    };

    render() {
        return (
            <div className="main-container">
                <Header titulo="header con props" />
                <div className="Bienvenida">
                    <h1>Hola React</h1>
                    <h2>Ejercicios con React</h2>
                    <h3 style={{ color: "green" }}>{`${this.state.nombre} ${
                        this.state.apellidos
                    }`}</h3>
                    <button onClick={this.handleClick}>Cambiar Nombre</button>
                </div>
            </div>
        );
    }
}

export default App;
