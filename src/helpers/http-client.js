import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:5000/backend',
    timeout: 30000, // indicates, 1000ms ie. 1 second
    headers: {
        "Content-Type": "application/json",
    }
});

export default httpClient;