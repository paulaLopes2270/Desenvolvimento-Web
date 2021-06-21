import React from 'react';
import Produto from "../../../model/Produto";
import { Link } from "react-router-dom";

import api from "../../../service/api";

import "./index.css";

export default class CadastroProduto extends React.Component {

    state = {
        produto: new Produto()
    }

    cadastrarProduto = async (e) =>{
        e.preventDefault();

        /**
         * 1° Eu tenho que pegar os dados do formulario e colocar no state.
         * 2° Enviar esses dados para o backend.
         * 3° Com o retorno, limpar o state
         */

        let produto = new Produto({
            nome: e.target[0].value,
            quantidade: parseInt(e.target[1].value),
            valor: parseFloat(e.target[2].value),
            urlImagem: e.target[3].value 
        });

        this.setState({produto});
        
        try {
            const resposta = await api.post("/api/produtos", produto);
            console.log(resposta);
            alert("Produto cadastrado com sucesso!");

            // Aqui limpei os campos
            this.setState({produto: new Produto()});

        } catch (error) {
            console.log(error);
            alert("Ops, não foi possivel cadastrar este produto.");
        }
    }


    render(){
        return (
            <div className="container-cadastro">
                 <form onSubmit={this.cadastrarProduto}>
                    <div className="grupo">
                        <label htmlFor="nome">Nome:</label>
                        <input itemID="nome" type="text"  />
                    </div>
     
                    <div className="grupo">
                        <label htmlFor="quantidade">Quantidade:</label>
                        <input itemID ="quantidade" type="number" value={this.state.produto.quantidade} />
                    </div>

                    <div className="grupo">
                        <label htmlFor="valor">Valor:</label>
                        <input itemID="valor" type="text" value={this.state.produto.valor} />
                    </div>

                    <div className="grupo">
                        <label htmlFor="url">Url da imagem:</label>
                        <input itemID="url" type="text" value={this.state.produto.urlImagem}/>
                    </div>


                    <div className="grupo">
                        <input type="submit" value="Cadastrar"/> 
                        <input type="reset" value="Limpar"/>
                    </div>


                 </form>
                <Link to={"/produtos"}>Voltar para produtos</Link>
            </div>
        );
    }
} 

