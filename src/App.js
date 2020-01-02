import React from "react";
// Importação das rotas
import Routes from "./routes";
// Importando o componente criado
import Header from "./components/Header"
// Importando o componente criado Main (sem uso após adicionar Routes)
//import Main from "./pages/main"

// Importando css
import "./styles.css";

// Substituição do <Main /> por <Routes /> para utilizar rotas
const App = () => (  
  <div className="App">    
    <Header />
    <Routes />
  </div>  
);

export default App;
