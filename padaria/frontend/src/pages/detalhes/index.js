import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import api from '../../service/api';
import Produto from "../../model/Produto";
import utilsDinheiro from '../../utils/dinheiro';

// import apiViaCep from "../../service/viacep-api";


export default class Detalhes extends React.Component {

    state = {
        produto: new Produto(),

    };

    // é uma função que será sempre executada quando o componente for montado.
    async componentDidMount(){

        
        // Aqui vamos pegar o id que vem na rota.
        // consultar esse id na api
        // Do retorno pular o detalhes.
        // var resultado = await apiViaCep.get("/28621090/json");
        // console.log(resultado);

        const { id } = this.props.match.params;

        const resposta  = await api.get("/api/produtos/"+id);

        this.setState({produto: new Produto(resposta.data)})

    }


    render(){
        const { produto } = this.state;
        
        return (
            <div className="detalhes-produto">
                <h2>{produto.nome}</h2>
                <p><strong>Quantidade: </strong> {produto.quantidade}</p>
                <h3><strong>Valor: </strong>{ utilsDinheiro.formatarParaValorReal(produto.valor)}</h3>
                <p>
                    <a href={produto.urlImagem} target="_blank"> {produto.urlImagem}</a>
                </p>

                <p>
                    <Link to={`/produtos`}>Voltar</Link>
                </p>
            </div>
        );
    }
}