import axios from "axios"
import config from "../config"

const api = axios.create({
    baseURL: config.api.url + '/authentication'
});

const authentication = {
    login: (email, password) => {
        return api.post('/login', { email, password });
    },
    register: (email, password, name) => {
        return api.post('/register', { email, password, name });
    }
};

export default authentication;