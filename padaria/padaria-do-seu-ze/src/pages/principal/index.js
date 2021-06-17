import React from "react";
import api from "../../model/produto";
import api from '/../../service/api';
import "./index.css";
export default class Principal extends React.Component {
  state = {
    produtos: [],
  };
//versão 1
//   componentDidMount() {
//     api.get("/api/produtos")
//       .then((resposta) => {
//         this.setSatate({produtos: resposta.data.map((obj) => new produto(obj)) });
//       })
//       .catch((error) => console.log(error));
//   }

componentDidMount(){
    this.obterProdutos();
}

//versão 02
// obterProdutos = () => {
//         api.get("/api/produtos")
//       .then((resposta) => {
//         this.setSatate({produtos: resposta.data.map((obj) => new produto(obj)) });
//       })
//       .catch((error) => console.log(error));
// }

    obterProdutos = async () => { 
        const resposta = await api.get ("/api/produtos");
        this.setState({produtos: resposta.data.map(obj => new Produto (obj))})
    }

  render() {
    return (
      <div className="container-produtos">
        {this.state.produtos.map((produto) => (
          <div className="produtos" key={produto.id}>
            <p>
              <strong>Id:</strong> {produto.id}{" "}
            </p>
            <p>
              <strong>Nome:</strong> {produto.nome}{" "}
            </p>
            <p>
              <strong>Valor</strong> {produto.valor}{" "}
            </p>
          </div>
        ))}
      </div>
    );
  }
}
