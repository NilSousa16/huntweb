import React from "react";
// Import de componentes específicos
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Import da página main
import Main from "./pages/main";
// Importando o componente criado Product
import Product from "./pages/product"

// Criação de componente
const Routes = () => (
    // Define que as rotas são utilizadas através de um browser
    // Switch permite que apenas uma rota pode ser chamada ao mesmo tempo
    // Route define a rota
    // exact é usado para que a rota / somente seja escolhida caso o caminho seja exatamente /
    <BrowserRouter>        
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;