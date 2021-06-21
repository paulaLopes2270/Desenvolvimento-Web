export default class Produto {

    constructor(obj){
        obj = obj || {}; //Tratamento para não deixar da um erro quando o obj vir null, undefined, vazio ou 0;
                
        this.id = obj.id;
        this.nome = obj.nome;
        this.quantidade = obj.quantidade;
        this.valor = obj.valor;
        this.urlImagem = obj.urlImagem;
    }

    // Exemplo de um metodo que sabe validar se o produto é valido ou não.
    modeloValido(){
        return !!(this.id && this.nome);
    }
}