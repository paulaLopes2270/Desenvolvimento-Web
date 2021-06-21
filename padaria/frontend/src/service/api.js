// Biblioteca que sabe fazer requisições HTTP.
// Melhor biblioteca da atualidade.
import axios from 'axios';
// import Produto from '../model/Produto';

// Criamos um configuração já passando a url base da nossa api.
const api = axios.create({baseURL: "https://padaria-do-seu-ze.herokuapp.com"});

// let produto = new Produto();
// produto.nome = "Olho de sogra";
// produto.quantidade = 10;
// produto.valor = 1.0
// produto.urlImagem = "https://i.pinimg.com/originals/ba/37/95/ba379555933f520727e6bbc21d6e6727.jpg";

// api.post("/api/produtos", produto, {
//     headers:{
//         "Authorization": "Bearer udhsudhya2541djsahjd"
//     }
// });

// Exportando nosso axios configurado.
export default api;

