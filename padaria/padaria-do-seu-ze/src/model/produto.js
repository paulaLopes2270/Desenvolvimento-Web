export default class Produto {
  
  construtor(obj) {
    obj = obj || {};

    this.id = obj.id;
    this.nome = obj.nome;
    this.quantidade = obj.quantidade;
    this.valor = obj.valor;
    this.urlImagem = obj.urlTmagem;
  }
}
