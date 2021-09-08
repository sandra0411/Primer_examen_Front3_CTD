

import React, { Component } from "react";




export default class Opciones extends Component {

    constructor(props) {
        super(props);
        
    }
    
  
    render() { 
        return (
                      

            <div className= "opciones">
                
                <div className= "opcion">
                    <button className= "botones" onClick= {this.props.historiaA}>A</button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                
                <div className= "opcion">
                    <button className= "botones" onClick= {this.props.historiaB}>B</button>
                    <h2>{this.props.opcionB}</h2>
                </div>
                
            </div>

           
        );
    }
}