
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

// Construindo um componente em formato de função
// É chamado de Statelles
const Header = () => (
    <div className="header">
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/produtos"}>Produtos</Link></li>
            <li><Link to={"/carrinho"}>Carrinho</Link></li>
        </ul>       
    </div>
);

export default Header;