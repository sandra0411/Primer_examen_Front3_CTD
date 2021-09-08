

import data from './data.json'
import React, { Component } from "react";
import Recordatorio from './Recordatorio';
import Opciones from './Opciones';


const historial = [];

export default class Main extends Component {

    constructor() {

        super();
        this.state = {
            contador: 1,
            opcion: "",

        }
    }

    historiaA = () => {

        if (this.state.contador >= 5) {
            alert("The end");
        } else {
            this.setState({
                contador: this.state.contador + 1,
                opcion: "a"
            })

        }

    }

    historiaB = () => {
        if (this.state.contador >= 5) {
            alert("The end");
        } else {
            this.setState({
                contador: this.state.contador + 1,
                opcion: "b"
            })

        }

    }



    componentDidUpdate(estadoAnt) {
        if (this.state.contador !== estadoAnt) {
            historial.push(this.state.opcion.toUpperCase());
        }
    }

    render() {
        return (

            <div className="layout">
                <h1 className="historia">{data.find(e => e.id === (this.state.contador + this.state.opcion)).historia}</h1>

                <Opciones
                    historiaA={this.historiaA}
                    historiaB={this.historiaB}
                    opcionA={data.find(e => e.id === (this.state.contador + this.state.opcion)).opciones.a}
                    opcionB={data.find(e => e.id === (this.state.contador + this.state.opcion)).opciones.b}
                />

                <Recordatorio
                    seleccion={this.state.opcion.toUpperCase()}
                    recorrido={historial.map((e, index) => (<li key={index}>{e}</li>))}
                />

            </div>


        );


    }
}

