import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PlacarContainer from './PlacarContainer'

const dados = {

    partida: {
      estadio: "Beira-Rio",
      data: "01/10/2018",
      horario: "19h"
    },

    casa: {
      nome: "Inter"
    },

    visitante: {
      nome: "Gremio"
    }

};


export default class App extends Component {

  render() {
    return (

      <div className="container">

        <PlacarContainer {...dados}  />

      </div>

    );
  }
}


