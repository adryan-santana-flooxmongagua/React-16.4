import React, { Component } from 'react';

export default class Sdd extends Component {
  state = {
    tipo: this.props.tipo,
    nome: this.props.nome,
  };

  setTipo(e) {
    this.setState({ tipo: e.target.value });
  }

  constructor(props){
    super(props)

    this.setNome = this.setNome.bind(this)
    this.setTipo = this.setTipo.bind(this)

  }

  setNome(e) {
    this.setState({ nome: e.target.value });
  }

  render() {
    const { tipo, nome } = this.state;
    return (
      <div>
        <h1>{tipo} {nome}!</h1>
        <hr />
        <input
          type="text"
          placeholder="Tipo..."
          value={tipo}
          onChange={this.setTipo}
        />
        <input
          type="text"
          placeholder="Nome..."
          value={nome}
          onChange={this.setNome}
        />
      </div>
    );
  }
}
