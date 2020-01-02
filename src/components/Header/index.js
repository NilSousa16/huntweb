import React from "react";

// Importação do arquivo css para configuração do componente
import "./styles.css";  

// Variável que retorna uma função
// Forma direta quando a primeira linha da função é o return
// Este é um componente criado a partir de uma função e não de uma classe
// Chamado de stateless components
const Header = () => (
    <header id="main-header">JSHunt</header>
);

// O componente Header acima é o mesmo abaixo
// Menos verboso
// Usado obrigatóriamente quando houver a necessidade do estado
// class Header extends Component {
//     render() {
//         return <h1>Hello World</h1>;
//     }
// }

export default Header;