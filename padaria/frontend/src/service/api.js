import axios from 'axios';

const api = axios.create({baseURL: "https://padaria-do-seu-ze.herokuapp.com"});

export default api;