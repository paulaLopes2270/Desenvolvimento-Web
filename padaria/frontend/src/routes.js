import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

import CadastroProduto from "./pages/produtos/cadastro";
import TelaProduto from "./pages/produtos";
import Detalhes from "./pages/detalhes";
import Header from "./components/Header";
import Carrinho from "./pages/carrinho";
import Home from "./pages/home";

/*
    O Router por padrão pega o path parcial, então ele tenta encontrar qualquer rota
    que faça parte do path informado.

    Quando colocamos a palavra exact, ele obriga a rota pegar o path identico par não pegar rotas erradas.
*/
// Só posso fazer roteamento se o componente de rota estiver dentro do BrowserRouter
const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component= {Home} />
            <Route exact path="/produtos" component= {TelaProduto} />
            <Route path="/produtos/cadastro" component= {CadastroProduto} />
            <Route path="/produtos/:id/detalhes" component= {Detalhes} />
            <Route path="/carrinho" component= {Carrinho} />
        </Switch>
    </BrowserRouter>
);



export default Routes;