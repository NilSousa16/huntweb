// Necessário sempre que for usar o JavaScript Syntax eXtension - JSX (extensão de sintaxe do JavaScript que nos permite escrever HTML dentro do JavaScript.)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Usado uma única vez em toda a aplicação
// Pega o conteúdo do arquivo App.js e renderiza ele no index.html da pasta public na div root
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
