import * as a  from 'axios';

export let axios = a.create({
    baseURL: 'http://localhost:4000/api'
});

axios.interceptors.request.use((config) => {

    
     config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token');
     
return config;


})

//config.headers.Accept = 'Content-Type': 'multipart/form-data';





