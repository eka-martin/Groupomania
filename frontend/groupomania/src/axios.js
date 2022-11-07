import * as a  from 'axios';

export let axios = a.create({
    baseURL: 'http://localhost:4000/api'
});

// axios.interceptors.request.use((config) => {
// config.headers.Authorization = window.localStorage.getItem('token');
// return config;
// })






