import React, { Component } from "react";
// Importando configuração da API
import api from "../../services/api";
//Importando o Link do react para criar links
import { Link } from "react-router-dom";
// Importando o CSS
import "./styles.css";

export default class Main extends Component {
    // Utilizado para armazenar os dados recuperados da API
    // O método render irá depender das variáveis do state para apresentar os dados
    // Não usar variáveis comuns
    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    // Método de Ciclo
    // Chamado assim que o componente é montado em tela  
    componentDidMount() { // Named Function                            
        this.loadProducts(); // Modelo de função que pode ser usado com método pertencentes ao React
    }
    
    //Funções do desenvolvedor deverão ser criadas com o modelo Arrow Function
    // Necessário para não sobrescrever o valor do this
    loadProducts = async (page = 1) => { 
        // Chamando a API
        // Atenção: aqui foi usado o sinal de crase para não reconhecer todo o caminho como string
        const response = await api.get(`/products?page=${page}`);           
        // Armazena os valores em docs e todo resto em um objeto productInfo
        const { docs, ...productInfo } = response.data;
        //Armazenando os valores em state
        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        // Recebe os valores de state
        const { page } = this.state;
        // Verifica se está na primeira página para interromper a função
        if(page === 1) return;
        // Caso não seja a página inicial será subtraido 1 a váriavel page e atribuida em pageNumber
        const pageNumber = page - 1;
        // Chama o loadProducts com o novo valor da página
        this.loadProducts(pageNumber);
    };

    nextPage = () => {
        // Recebe os valores de state
        const { page, productInfo } = this.state;
        // Verifica se está na última página para interromper a função
        if(page === productInfo.pages) return;
        // Caso não seja a página final será adicionado 1 a váriavel page e atribuida em pageNumber
        const pageNumber = page + 1;
        // Chama o loadProducts com o novo valor da página
        this.loadProducts(pageNumber);
    };

    // Sempre que houver uma variável no state o método render vai ficar escutando as alterações realizadas
    render() {
        const { products, page, productInfo } = this.state;
        //Uso de Link no lugar da tag html <a>
        return (            
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>                
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>            
        );  
    }
}