// Axios para acesso a API
import axios from 'axios';

// Variável com o endereço da API
const api = axios.create({
    baseURL: "https://rocketseat-node.herokuapp.com/api"
})

// Expondo o arquivo api.js
export default api;