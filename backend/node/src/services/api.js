import axios from 'axios';

// Configuração da instância do axios
const api = axios.create({
  baseURL: 'http://localhost:3001/api', // URL base para o backend
});

export default api;
