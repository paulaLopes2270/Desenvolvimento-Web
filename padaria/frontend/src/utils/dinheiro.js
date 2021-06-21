function formatarParaValorReal(valor){
    return Number(valor).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}


function formatarParaEuro(valor){
    return "E"+valor;
}

export default {
    formatarParaValorReal,
    formatarParaEuro
}