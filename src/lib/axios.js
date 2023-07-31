import axios from 'axios';

export default axios.create({
    baseURL: 'https://bielgsilva.cyclic.app',
    timeout: 10000,
    headers: { 'Content-Type': 'Application/json' }
})