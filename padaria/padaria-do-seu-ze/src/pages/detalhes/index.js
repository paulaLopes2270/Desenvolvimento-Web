import React from "react"
import "./index.css";

export default class Detalhes extends React.Component {

  state = { 
    produto:{}
  };

  render(){
    const {produto} = this.state;
    return (
      <div>
        <h2>{produto.name}</h2>
        <h3>{produto.quantidade}</h3>
        <h3>{produto.valor}</h3>
        <p>
          <a href={produto.urlImagem}
        </p>
      </div>
    )
  }
}