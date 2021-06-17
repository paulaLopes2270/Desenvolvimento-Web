import React from "react";
import './index.css';
export default class Principal extends React.Component  {

    state = {
       produtos: [],
       mensagem: "tudo bem com vocês"
    }

    render(){
        return (
            <div className="container-produtos">
                {this.state.produtos.map(produto => (
                    <div className="produtos" key={ produto.id }>
                        <p><strong>Id:</strong> { produto.id } </p>
                        <p><strong>Nome:</strong> { produto.nome } </p>
                        <p><strong>Valor</strong> { produto.valor } </p>
                    </div>
                ))}

            </div>
        );
    }
}



