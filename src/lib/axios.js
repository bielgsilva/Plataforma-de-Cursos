import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-plataforma-de-cursos-h37j.onrender.com',
    timeout: 10000,
    headers: { 'Content-Type': 'Application/json' }
})