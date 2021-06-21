import React, { useState, useEffect } from "react";

const Hooks = () => {

    // Vamos declarar uma propriedade de state que chamamos de contador
    /*
    Essa forma de fazer um destructor com colchetes no useState é uma forma onde 
    nós criamos dentro dele a propriedade e em seguida resgatamos. */
    const [contador, setContador] = useState(0);
    const [mensagem, setMensagem] = useState("");

    const [produto, setProduto] = useState({});
    const [alunos, setAlunos] = useState([{nome:"Leandro"}]);

    const handleContador = () =>{
        setContador(contador + 1);
        setMensagem("Fui alterada mais uma vez - " + contador);
    }

    // const handleQualquer = () => {
    // alert("oi")
    // },

    //Simulando o componetDidMount e o componentDidUpdate
    useEffect(() => {
        document.title = `Cliquei aqui ${contador} vezes`;
    })



    // useEffect(() => {
    //     // O código que é colocado aqui sempre será executado em algum efeito.
    // });
    // useEffect(handleQualquer);

    return (
        <center>
            <p>Você clicou aqui {contador} vezes</p>
            <button onClick={ handleContador } >
                Clique aqui
            </button>
            <p> Mensagem: { mensagem }</p>
        </center>
    );
}

export default Hooks;