import axios from 'axios';

const api = axios.create({
  baseURL: 'https://diego-sistema-pedido.herokuapp.com/',
});

export default api;
