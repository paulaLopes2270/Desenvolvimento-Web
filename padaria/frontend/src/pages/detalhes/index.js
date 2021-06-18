import React from "react";
import "./index.css";

export default class Detalhes extends React.Component {

    state = {
        produto:{}
    };

    componentDidMount(){
        // Aqui vamos pegar o id que vem na rota.
        // consultar esse id na api
        // Do retorno pular o detalhes.
    }

    render(){
        const { produto } = this.state;

        return (
            <div className="detalhes-produto">
                <h2>{produto.name}</h2>
                <h3>{produto.quantidade}</h3>
                <h3>{produto.valor}</h3>
                <p>
                    <a href={produto.urlImagem}>Imagem</a>
                </p>
            </div>
        );
    }
}