import React from "react";
// import Header from './components/Header';
import Routes from "./routes";

import "./styles.css";

/**
 * Componente principal que é utilizado na inicialização do sistema.
 * @returns Retorna um JSX com o layout da aplicação.
*/
const App = () => (
    <div className="container">
      {/* <Header/>       */}
      <Routes/> 
    </div>
);

export default App;
