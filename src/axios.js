import axios from 'axios';

const instance = axios.create({
    baseURL: "https://us-central1-ecommerce-42a04.cloudfunctions.net/api"
    // baseURL: "http://localhost:5001/ecommerce-42a04/us-central1/api"
});

export default instance;