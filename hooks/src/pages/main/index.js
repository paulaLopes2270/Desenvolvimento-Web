/*
Props: São formas de passar valores ou informações para dentro dos componentes.
dessa forma podemos usar essas informações para o que quiser.

Hooks: São uma forma resumida de de adição de comportamentos que foi introduzida apartir
da versão do react 16.8.

Eles vão permitir  que possamos utilizar "state" e mais alguns recursos do React sem ter
que escrever uma classe.

useState(): é um hook para trabalhar com o stado do atributo.


Toda vez que renderizamos a view estamos fazendo uma subscrição (subscription).
Quando estamos pegando os dados da tela "obtenção de dados" (Data fetching).

Tudo que acontece na aplicação chamamos de forma geral de "efeitos colaterais" (side effects ou simplismente effects).

useEffect: Adicionar a funcionalidade de executar qualquer efeito colateral através
 de um componente funcional.

*/

import React from "react";

//Componente statelles só com view.
const Main = () => (
    <div>
        <SegundoComponente mensagem="Ola galerinha do Serratec" teste="bombinha de nutella"/>
        <TerceiroComponente teste="Sonho de doce de leite"/>
        <QuartoComponente mensagem="A melhor turma do Serratec 2021!"/>
    </div>
);

// Componente em função com propriedades.
// Criar componentes em function é uma nova forma que foi introduzida na
// versão 17 do react.
function SegundoComponente(props){
    
    return (
        <center>
            <h1>{props.mensagem}</h1>
            <TerceiroComponente teste={props.teste} />
        </center>        
    );
}

/*
Vamos retornar um componete com (parenteses) quando ele só tem view.
Vamos retornar com {chaves} quando podemos ter algo mais que somente View.*/
const TerceiroComponente = (props) => {
    let ola = props.teste + " ;)";

    return (
        <h2>{ola}</h2>
    );
}

class QuartoComponente extends React.Component {

    state = {
        contador: 0,
        mensagem: "",
        produto: {},
        alunos: [
            {nome: "Leandro"}
        ]
    }

    // Executa toda vez que o componente é criado.
    // componentDidMount(){
    //     alert("oi")
    // }

    // componentDidUpdate(){

    // }

    // componentWillUnmount(){

    // }

    render(){
        return (
            <h1>{this.props.mensagem}</h1>
        );  
    }
}


export default Main;